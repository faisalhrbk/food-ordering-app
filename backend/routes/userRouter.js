import express from "express";
const userRouter = express.Router();
import {
	createCurrentUser,
	updateCurrentUser,
} from "../controllers/userController.js";
import { jwtCheck } from "../middlewares/auth.js";

//* api/user
userRouter.post("/", jwtCheck, createCurrentUser);
userRouter.put('/', updateCurrentUser)
export default userRouter;
