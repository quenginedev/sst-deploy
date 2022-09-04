import { endGroup, startGroup } from "@actions/core";
import { REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } from "./config.js";
import { execSync } from "child_process";

const createCredentials = async () => {
  startGroup("Creating AWS credentials");
  execSync(`aws configure set aws_access_key_id ${AWS_ACCESS_KEY_ID}`, { stdio: "inherit" });
  execSync(`aws configure set aws_secret_access_key ${AWS_SECRET_ACCESS_KEY}`, { stdio: "inherit" });
  execSync(`aws configure set default.region ${REGION}`, { stdio: "inherit" });
  execSync(`export AWS_DEFAULT_PROFILE=default`, { stdio: "inherit" });
  endGroup();
};

export default createCredentials;
