import createCredentials from "./create-credentials.js";
import setup from "./setup.js";
import deploy from "./deploy.js";

const runner = async () => {
	await createCredentials()
	await setup()
	await deploy()
}

export default runner