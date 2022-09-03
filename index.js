import { setFailed } from '@actions/core'
import runner from "./lib/runner.js";
import {compose, prop} from 'ramda'

const setFailedMessage = compose(setFailed, prop('message')) 
runner().catch(setFailedMessage);