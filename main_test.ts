import { generateSelfSignedX509KeyPair } from "./mod.ts";
import { assertStringIncludes } from "https://deno.land/std@0.210.0/assert/mod.ts";

Deno.test("Generates valid public and private keys", async function testGenerateSelfSignedX509KeyPair() {
  const keypair = await generateSelfSignedX509KeyPair(
    "CN=sealed-secret, O=sealed-secret",
  );
  assertStringIncludes(keypair.publicKey, "-----BEGIN CERTIFICATE-----");
  assertStringIncludes(keypair.publicKey, "-----END CERTIFICATE-----");
  assertStringIncludes(keypair.privateKey, "-----BEGIN PRIVATE KEY-----");
  assertStringIncludes(keypair.privateKey, "-----END PRIVATE KEY-----");
});
