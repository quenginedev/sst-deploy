import { writeFileSync, readFileSync, mkdirSync } from "fs";
import { endGroup, startGroup } from "@actions/core";
import { REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } from "./config.js";
import { join } from "path";
import { homedir } from "os";
import { execSync } from 'child_process'

const createCredentials = async () => {
  startGroup("Creating AWS credentials");

  const defaultCredentialsDir = join(AWS_DIR, "credentials");
  const defaultConfigDir = join(AWS_DIR, "config");

  const credentials = `[default]
aws_access_key_id = ${AWS_ACCESS_KEY_ID}
aws_secret_access_key = ${AWS_SECRET_ACCESS_KEY}
`;

  const config = `[default]
region = ${REGION}
output = json
`;

  writeFileSync(defaultConfigDir, config, { encoding: "utf8" });
  writeFileSync(defaultCredentialsDir, credentials, { encoding: "utf8" });
  console.log({
    config: readFileSync(defaultConfigDir, { encoding: "utf8" }),
    credentials: readFileSync(defaultCredentialsDir, { encoding: "utf8" }),
  });
  endGroup();
};

export default createCredentials;
