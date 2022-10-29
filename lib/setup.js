import { execSync } from "child_process";
import { join } from "path";
import { PKG_MANAGER, STAGE, ENVS, PROJECT_PATH } from "./config.js";
import { endGroup, startGroup, info } from "@actions/core";
import { mkdirSync, writeFileSync } from "fs";
import { log } from "./logger.js";

const installDepsMap = {
  npm: "npm ci",
  yarn: "yarn install --frozen-lockfile --ignore-platform",
};

const setup = async () => {
  startGroup("Setting up project dependencies");
  const installDeps = installDepsMap[PKG_MANAGER];
  info(ENVS)
  writeFileSync(PROJECT_PATH, ENVS, { encoding: 'utf8' })
  execSync(`cd ${PROJECT_PATH} && ${installDeps}`, { stdio: "inherit" });
  log({ message: "Setting SST stage", data: STAGE });
  const sstPath = join(PROJECT_PATH, ".sst");
  mkdirSync(sstPath);
  writeFileSync(join(sstPath, "stage"), STAGE, { encoding: "utf8" });
  endGroup();
};

export default setup;
