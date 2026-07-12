import { execSync } from "node:child_process";

const env = { ...process.env };

if (env.OPENNEXT_INTERNAL_BUILD === "1") {
  execSync("next build", { stdio: "inherit", env, shell: true });
} else {
  execSync("opennextjs-cloudflare build", {
    stdio: "inherit",
    env: { ...env, OPENNEXT_INTERNAL_BUILD: "1" },
    shell: true,
  });
}
