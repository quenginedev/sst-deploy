import { execSync } from "child_process";
import { join } from "path";
import { SST_PKG_MANAGER, STAGE, PROJECT_PATH } from "./config.js";
import { endGroup, startGroup } from "@actions/core";
import { mkdirSync, writeFileSync } from "fs";
import { log } from "./logger.js";

const installDepsMap = {
  pnpm: "pnpm install", // frozen lockfile is default with pnpm
  npm: "npm ci",
  yarn: "yarn install --frozen-lockfile --ignore-platform",
};

const setup = async () => {
  startGroup("Setting up project dependencies");
  const installDeps = installDepsMap[SST_PKG_MANAGER];
  writeFileSync(join(PROJECT_PATH, '.env'), JSON.stringify(process.env), { encoding: 'utf8' })
  execSync(`cd ${PROJECT_PATH} && ${installDeps}`, { stdio: "inherit" });
  log({ message: "Setting SST stage", data: STAGE });
  const sstPath = join(PROJECT_PATH, ".sst");
  mkdirSync(sstPath);
  writeFileSync(join(sstPath, "stage"), STAGE, { encoding: "utf8" });
  endGroup();
};

export default setup;
