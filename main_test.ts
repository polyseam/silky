import { generateSelfSignedX509KeyPair } from "./mod.ts";
import { assertStringIncludes } from "@std/assert";

Deno.test("Generates valid public and private keys", async function testGenerateSelfSignedX509KeyPair() {
  const keypair = await generateSelfSignedX509KeyPair(
    "CN=sealed-secret, O=sealed-secret",
  );
  assertStringIncludes(keypair.publicKey, "-----BEGIN CERTIFICATE-----");
  assertStringIncludes(keypair.publicKey, "-----END CERTIFICATE-----");
  assertStringIncludes(keypair.privateKey, "-----BEGIN PRIVATE KEY-----");
  assertStringIncludes(keypair.privateKey, "-----END PRIVATE KEY-----");
});

Deno.test("Generates valid public and private keys with algo partial", async function testGenerateSelfSignedX509KeyPair() {
  const keypair = await generateSelfSignedX509KeyPair(
    "CN=partial, O=partial",
    { modulusLength: 2048 },
  );
  assertStringIncludes(keypair.publicKey, "-----BEGIN CERTIFICATE-----");
  assertStringIncludes(keypair.publicKey, "-----END CERTIFICATE-----");
  assertStringIncludes(keypair.privateKey, "-----BEGIN PRIVATE KEY-----");
  assertStringIncludes(keypair.privateKey, "-----END PRIVATE KEY-----");
});
