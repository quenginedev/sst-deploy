import {execSync} from 'child_process'
import {join, resolve} from 'path'
import { PATH } from './config.js'
import { endGroup, startGroup } from "@actions/core";

const setup = async () => {
	startGroup('Setting up project')
	execSync('export AWS_PROFILE=default', { stdio: 'inherit' })
	const projectPath = resolve(join(process.cwd(), PATH))
	execSync(`cd ${projectPath} && npm ci`, { stdio: 'inherit' })
	endGroup()
}

export default setup