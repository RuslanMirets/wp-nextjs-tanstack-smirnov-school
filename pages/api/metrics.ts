import { NextApiRequest, NextApiResponse } from "next";
import client from "prom-client";

const register = new client.Registry();
client.collectDefaultMetrics({ register });

const metrics = async (req: NextApiRequest, res: NextApiResponse<any>) => {
	res.setHeader("Content-Type", client.register.contentType);
	res.send(await client.register.metrics());
};

export default metrics;
