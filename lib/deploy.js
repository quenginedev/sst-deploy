import { execSync } from "child_process";
import { endGroup, startGroup } from "@actions/core";
import { readFileSync } from "fs";
import { join } from "path";
import { SST_PKG_MANAGER, PROJECT_PATH } from "./config.js";
import { log } from "./logger.js";

const deployPkgMgrMap = {
  npm: "npm run deploy",
  yarn: "yarn deploy",
};

const deploy = async () => {
  log({ message: "Retrieving project's meta data" });
  const pkgStr = readFileSync(join(process.cwd(), "package.json"), {
    encoding: "utf8",
  });
  const pkg = JSON.parse(pkgStr);
  startGroup(`Deploying project - ${pkg.name}`);
  execSync(deployPkgMgrMap[SST_PKG_MANAGER], {
    stdio: "inherit",
    shell: true,
    encoding: "utf-8",
  });
  endGroup();
};

export default deploy;
