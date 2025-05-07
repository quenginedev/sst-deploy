import { execSync } from "child_process";
import { endGroup, startGroup } from "@actions/core";
import { readFileSync } from "fs";
import { join } from "path";
import { SST_PKG_MANAGER, PROJECT_PATH,PRE_DEPLOY, STAGE } from "./config.js";
import { log } from "./logger.js";

const deployPkgMgrMap = {
  npm: `npm run deploy --stage ${STAGE}`,
  yarn: `yarn deploy --stage ${STAGE}`,
  pnpm: `pnpm run deploy --stage ${STAGE}`,
};

const deploy = async () => {
  log({ message: "Retrieving project's meta data" });
  const pkgStr = readFileSync(join(PROJECT_PATH, "package.json"), {
    encoding: "utf8",
  });
  const pkg = JSON.parse(pkgStr);
  startGroup(`Deploying project - ${pkg.name}`);
  if (PRE_DEPLOY) execSync(`cd ${process.cwd()} && ${PRE_DEPLOY}`, { stdio: "inherit" });
  execSync(`cd ${PROJECT_PATH} && ${deployPkgMgrMap[SST_PKG_MANAGER]}`, {
    stdio: "inherit",
    shell: true,
    encoding: "utf-8",
  });
  endGroup();
};

export default deploy;
