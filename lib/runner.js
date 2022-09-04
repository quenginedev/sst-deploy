import createCredentials from "./create-credentials.js";
import deploy from "./deploy.js";

const runner = async () => {
	await createCredentials()
	// await deploy()
}

export default runner