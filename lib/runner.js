import createCredentials from "./create-credentials.js";
import deploy from "./deploy.js";
import setup from "./setup.js";

const runner = async () => {
	await createCredentials()
	await setup()
	await deploy()
}

export default runner