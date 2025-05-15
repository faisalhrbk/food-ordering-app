import User from "../models/User.js";

//*create post api/user
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

//*update put api/user
export const updateCurrentUser = async (req, res) => {
	try {
		const { name, addressLine1, country, city } = req.body;
		const user = await User.findById(req.userId);
		if (!user) {
			return res
				.status(404)
				.json({ success: false, message: "user not found" });
		}
		user.name = name;
		user.addressLine1 = addressLine1;
		user.city = city;
		user.country = country;
		await  user.save();

		return res.status(201).json({
			success: true,
			message: "User updated successfully",
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			success: false,
			message: "Internal Server Error | error updating user",
		});
	}
};
