import express from "express";
const userRouter = express.Router();
import { createCurrentUser } from "../controllers/userController.js";
import { jwtCheck } from "../middlewares/auth0.js";

//* api/user
userRouter.post("/", jwtCheck, createCurrentUser);

export default userRouter;
