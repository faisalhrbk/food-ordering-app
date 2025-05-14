import express from "express";
const userRouter = express.Router();
import { createCurrentUser } from "../controllers/userController";


//* api/user
userRouter.post("/", createCurrentUser)



export default userRouter;