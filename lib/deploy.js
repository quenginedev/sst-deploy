import { execSync, spawnSync } from "child_process";
import { endGroup, startGroup } from "@actions/core";
import { readFileSync } from "fs";
import { join } from "path";
import { PKG_MANAGER } from "./config.js";

const deployPkgMgrMap = {
  npm: "run deploy",
  yarn: "deploy",
};

const deploy = async () => {
  const pkgStr = readFileSync(join(process.cwd(), "package.json"), {
    encoding: "utf8",
  });
  const pkg = JSON.parse(pkgStr);
  startGroup(`Deploying project - ${pkg.name}`);
  const spawn = spawnSync([PKG_MANAGER, deployPkgMgrMap[PKG_MANAGER]]);
  spawn.stdout.on("data", (data) => {
    console.log(data.toString());
  });
  endGroup();
};

export default deploy;
