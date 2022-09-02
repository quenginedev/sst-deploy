import { setFailed } from '@actions/core'
import runner from "./lib/runner.js";

runner()
	.catch((error) => {
		setFailed(error.message);
	});