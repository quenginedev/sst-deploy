import {resolve, join} from 'path'
import {getInput} from '@actions/core'

const {
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    AWS_DEFAULT_REGION,
    SST_STAGE
} = process.env
const SST_PATH = getInput('path', {required: true})
const SST_PKG_MANAGER = getInput('pkg-manager', {required: true})
const STAGE = getInput('stage', {required: true})
const PRE_DEPLOY = getInput('pre-deploy', {required: false})
const PROJECT_PATH = resolve(join(process.cwd(), SST_PATH));
export {
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    AWS_DEFAULT_REGION,
    SST_PATH,
    SST_PKG_MANAGER,
    STAGE: STAGE || SST_STAGE || 'prod',
    PROJECT_PATH,
    PRE_DEPLOY
}
