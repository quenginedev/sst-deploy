import { writeFileSync, readFileSync } from 'fs'
import { endGroup, startGroup } from "@actions/core";
import { REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } from './config.js'
import { join } from 'path'
import { homedir } from 'os'


const defaultCredentialsDir = join(homedir(), '.aws/credentials')
const defaultConfigDir = join(homedir(), '.aws/config')

const createCredentials = async () => {
	startGroup('Creating AWS credentials')

	const credentials = `[default]
aws_access_key_id = ${AWS_ACCESS_KEY_ID}
aws_secret_access_key = ${AWS_SECRET_ACCESS_KEY}
`

	const config = `[default]
region = ${REGION}
output = json
`

	writeFileSync(defaultConfigDir, config, { encoding: 'utf8' })
	writeFileSync(defaultCredentialsDir, credentials, { encoding: 'utf8' })
	const configStr = readFileSync(defaultConfigDir, { encoding: 'utf8' })
	console.log(configStr)
	endGroup()
}

export default createCredentials