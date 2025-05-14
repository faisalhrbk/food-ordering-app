import User from "../models/User.js";

//* api/user
export const createCurrentUser = async (req, res) => {
	try {
		const { auth0Id } = req.body;
		const existingUser = await User.findOne({ auth0Id });
		if (existingUser) {
			return res
				.status(200)
				.json({ success: false, message: "User already exists" });
		}
		const newUser = new User(req.body);
		await newUser.save();
	
		res.status(201).json({ success: true, data: newUser.toObject() });
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: "Internal Server Error!",
		});
	}
};
