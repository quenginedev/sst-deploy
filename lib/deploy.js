import { execSync } from "child_process";
import { endGroup, startGroup } from "@actions/core";
import { readFileSync } from "fs";
import { join } from "path";
import { PKG_MANAGER } from "./config.js";

const deployPkgMgrMap = {
  npm: "npm run deploy",
  yarn: "yarn deploy",
};

const deploy = async () => {
  const pkgStr = readFileSync(join(process.cwd(), "package.json"), {
    encoding: "utf8",
  });
  const pkg = JSON.parse(pkgStr);
  startGroup(`Deploying project - ${pkg.name}`);
  const deployCmd = deployPkgMgrMap[PKG_MANAGER];
  execSync(`${deployCmd}`, { stdio: "inherit", shell: true });
  endGroup();
};

export default deploy;
