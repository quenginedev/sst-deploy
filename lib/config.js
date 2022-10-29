import {resolve, join} from 'path'

const {
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    AWS_DEFAULT_REGION,
    SST_PATH,
    PKG_MANAGER,
    STAGE,
} = process.env
const PROJECT_PATH = resolve(join(process.cwd(), SST_PATH));
console.log({PROJECT_PATH})
export {
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    AWS_DEFAULT_REGION,
    SST_PATH,
    PKG_MANAGER,
    STAGE,
    PROJECT_PATH
}
