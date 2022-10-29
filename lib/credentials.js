import { endGroup, startGroup } from "@actions/core";
import { AWS_DEFAULT_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } from "./config.js";
import { execSync } from "child_process";
import { log } from "./logger.js";

const createCredentials = async () => {
  startGroup("Creating AWS credentials");
  log({ message: "Creating AWS Access Key Id", data: AWS_ACCESS_KEY_ID });
  execSync(`aws configure set aws_access_key_id ${AWS_ACCESS_KEY_ID}`, {
    stdio: "inherit",
  });
  log({
    message: "Creating AWS Secret Access Key",
    data: AWS_SECRET_ACCESS_KEY,
  });
  execSync(`aws configure set aws_secret_access_key ${AWS_SECRET_ACCESS_KEY}`, {
    stdio: "inherit",
  });
  log({ message: "Creating AWS Region", data: AWS_DEFAULT_REGION });
  execSync(`aws configure set default.region ${AWS_DEFAULT_REGION}`, { stdio: "inherit" });
  log({ message: "Set AWS Profile", data: "default" });
  execSync(`export AWS_DEFAULT_PROFILE=default`, { stdio: "inherit" });
  endGroup();
};

export default createCredentials;
