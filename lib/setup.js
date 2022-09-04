import {execSync} from 'child_process'
import {join, resolve} from 'path'
import { PATH, PKG_MANAGER } from './config.js'
import { endGroup, startGroup } from "@actions/core";

const installDepsMap = {
	npm: 'npm ci',
	yarn: 'yarn install --frozen-lockfile'
}

const setup = async () => {
	startGroup('Setting up project')
	const installDeps = installDepsMap[PKG_MANAGER] 
	execSync('export AWS_PROFILE=default', { stdio: 'inherit' })
	const projectPath = resolve(join(process.cwd(), PATH))
	execSync(`cd ${projectPath} && ${installDeps}`, { stdio: 'inherit' })
	endGroup()
}

export default setup