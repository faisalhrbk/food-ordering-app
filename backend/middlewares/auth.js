import { auth } from "express-oauth2-jwt-bearer";
import jwt from "jsonwebtoken";
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
		next();
	} catch (error) {
		return res.status(401).json({ message: error });
	}
};
