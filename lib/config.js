import {resolve, join} from 'path'
import {getInput} from '@actions/core'

const {
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    AWS_DEFAULT_REGION,
} = process.env
const SST_PATH = getInput('path', {required: true})
const SST_PKG_MANAGER = getInput('pkg-manager', {required: true})
const STAGE = getInput('stage', {required: true})
const PROJECT_PATH = resolve(join(process.cwd(), SST_PATH));
export {
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    AWS_DEFAULT_REGION,
    SST_PATH,
    SST_PKG_MANAGER,
    STAGE,
    PROJECT_PATH
}
