import { execSync } from "child_process";
import { join, resolve } from "path";
import { PATH, PKG_MANAGER, STAGE } from "./config.js";
import { endGroup, startGroup } from "@actions/core";
import { mkdirSync, writeFileSync } from "fs";
import { log } from "./logger.js";

const installDepsMap = {
  npm: "npm ci",
  yarn: "yarn install --frozen-lockfile --ignore-platform",
};

const setup = async () => {
  startGroup("Setting up project dependencies");
  const installDeps = installDepsMap[PKG_MANAGER];
  const projectPath = resolve(join(process.cwd(), PATH));
  execSync(`cd ${projectPath} && ${installDeps}`, { stdio: "inherit" });
  log({ message: "Setting SST stage", data: STAGE });
  const sstPath = join(projectPath, ".sst");
  mkdirSync(sstPath);
  writeFileSync(join(sstPath, "stage"), STAGE, { encoding: "utf8" });
  endGroup();
};

export default setup;
