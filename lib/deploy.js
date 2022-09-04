import { execSync, spawn, spawnSync } from "child_process";
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
  const worker = spawn(PKG_MANAGER, ["run", "deploy"], {stdio: "inherit"});
  worker.stdout.on("data", (data) => {
    console.log(data.toString());
  })
  worker.stderr.on("data", (data) => {
    console.error('Deploy Error:', data.toString());
  })

  worker.on('close', (code)=>{console.log('Deploy Complete with code:', code)})
  endGroup();
};

export default deploy;
