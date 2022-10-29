import {getInput} from '@actions/core'
import {resolve, join} from 'path'

const AWS_ACCESS_KEY_ID = getInput('access-key-id')
const AWS_SECRET_ACCESS_KEY = getInput('secret-access-key')
const REGION = getInput('region')
const PATH = getInput('path')
const PKG_MANAGER = getInput('pkg-manager')
const STAGE = getInput('stage')
const ENVS = getInput('envs') || ''
const PROJECT_PATH = resolve(join(process.cwd(), PATH));


export {
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    REGION,
    PATH,
    PKG_MANAGER,
    STAGE,
    ENVS,
    PROJECT_PATH
}
