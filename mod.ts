import { Name, PemConverter, X509CertificateGenerator } from "@peculiar/x509";

const x509 = { Name, X509CertificateGenerator, PemConverter };

type SelfSignedX509KeyPair = {
  publicKey: string;
  privateKey: string;
};

type X509Algo = {
  name: string;
  hash: string;
  publicExponent: Uint8Array;
  modulusLength: number;
};

const DEFAULT_ALGO: X509Algo = {
  name: "RSASSA-PKCS1-v1_5",
  hash: "SHA-256",
  publicExponent: new Uint8Array([1, 0, 1]),
  modulusLength: 4096,
};

export async function generateSelfSignedX509KeyPair(
  name: string,
  algo?: Partial<X509Algo>,
): Promise<SelfSignedX509KeyPair> {
  // Generate RSA key pair
  const alg = { ...DEFAULT_ALGO, ...algo };

  // ⚠️ this crypto api is named "subtle" because it is sensitive to subtle and complex implementation details
  const keys = await crypto.subtle.generateKey(alg, true, ["sign", "verify"]);

  // Create X.509 certificate
  const cert = await x509.X509CertificateGenerator.createSelfSigned({
    serialNumber: "01",
    name: new x509.Name(name),
    notBefore: new Date(),
    notAfter: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), // Valid for 1 year
    signingAlgorithm: alg,
    keys,
  });

  // Export keys and certificate
  const publicKey = cert.toString("pem");
  const pkcs8 = await crypto.subtle.exportKey("pkcs8", keys.privateKey);
  const privateKey = x509.PemConverter.encode(pkcs8, "private key");

  return { publicKey, privateKey };
}
