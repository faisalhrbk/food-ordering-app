import { auth } from "express-oauth2-jwt-bearer";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const jwtCheck = auth({
	audience: process.env.AUTH0_AUDIENCE,
	issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
	tokenSigningAlg: "RS256",
});

export const jwtParse = async (req, res, next) => {
	const { authorization } = req.headers;
	if (!authorization || !authorization.startsWith("Bearer ")) {
		return res.sendStatus(401);
	}
	const token = authorization.split(" ")[1];
	try {
		const decoded = jwt.decode(token);
		req.user = decoded;
		const user = await User.findOne({ auth0Id });
		const auth0Id = decoded.sub;
		if (!user) {
			return res.sendStatus(401);
		}
		req.auth0Id = auth0Id;
		req.userId = user._id.toString();
		next();
	} catch (error) {
		return res.status(401).json({ message: error });
	}
};
