import {resolve, join} from 'path'

const {
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    REGION,
    PATH,
    PKG_MANAGER,
    STAGE,
} = process.env
const PROJECT_PATH = resolve(join(process.cwd(), PATH));
export {
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    REGION,
    PATH,
    PKG_MANAGER,
    STAGE,
    PROJECT_PATH
}
