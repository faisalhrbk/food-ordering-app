import mongoose from "mongoose";
import { userRouter } from "../routes/userRouter";
const userSchema = new mongoose.Schema({
	auth0Id: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	name: String,
	addressLine1: String,
	city: String,
	country: String,
});

const User = mongoose.model("User", userSchema);
export default User; //* api/user
userRouter.post("/", createCurrentUser);
