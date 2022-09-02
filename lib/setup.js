import {execSync} from 'child_process'
import {join, resolve} from 'path'
import { PATH } from './config.js'
import { endGroup, startGroup } from "@actions/core";

const projectRoot = join(process.cwd(), resolve(PATH))

const setup = async () => {
	startGroup('Setting up project')
	execSync('export AWS_PROFILE=default', { stdio: 'inherit' })
	execSync(`cd ${projectRoot} && npm install`, { stdio: 'inherit' })
	endGroup()
}

export default setup