import express from "express";
const userRouter = express.Router();
import {
	createCurrentUser,
	updateCurrentUser,
} from "../controllers/userController.js";
import { jwtCheck, jwtParse } from "../middlewares/auth.js";
import { validateUserDetails } from "../middlewares/validation/userValidator.js";

//* createUser api/user
userRouter.post("/", jwtCheck, createCurrentUser);
//*updateUser api/user
userRouter.put("/", jwtParse, validateUserDetails, updateCurrentUser);

export default userRouter;
