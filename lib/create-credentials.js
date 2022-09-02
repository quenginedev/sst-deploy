import { writeFileSync } from 'fs'
import { endGroup, startGroup } from "@actions/core";
import { REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } from './config.js'

const defaultCredentialsDir = '~/.aws/credentials'
const defaultConfigDir = '~/.aws/config'

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
	endGroup()
}

export default createCredentials