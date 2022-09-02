import {getInput} from '@actions/core'

const AWS_ACCESS_KEY_ID = getInput('access-key-id')
const AWS_SECRET_ACCESS_KEY = getInput('secret-access-key')
const REGION = getInput('region')
const PATH = getInput('path')

export { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, REGION, PATH }
