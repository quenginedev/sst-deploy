import { execSync } from "child_process";
import { endGroup, startGroup } from "@actions/core";
import { readFileSync } from 'fs'
import { join } from "path";

const deploy = async () => {
	const pkgStr = readFileSync(join(process.cwd(), 'package.json'), { encoding: 'utf8' })
	const pkg = JSON.parse(pkgStr)
	startGroup(`Deploying project - ${pkg.name}`); // <--- This line is the problem
	execSync('sst deploy', { stdio: 'inherit' });
	endGroup()
}

export default deploy