import {execSync} from 'child_process'
import {join, resolve} from 'path'
import { PATH, PKG_MANAGER } from './config.js'
import { endGroup, startGroup } from "@actions/core";

const installDepsMap = {
	npm: 'npm i',
	yarn: 'yarn install'
}

const setup = async () => {
	startGroup('Setting up project dependencies')
	const installDeps = installDepsMap[PKG_MANAGER] 
	const projectPath = resolve(join(process.cwd(), PATH))
	execSync(`cd ${projectPath} && ${installDeps}`, { stdio: 'inherit' })
	endGroup()
}

export default setup