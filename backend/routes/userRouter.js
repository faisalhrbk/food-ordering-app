import express from "express";
const userRouter = express.Router();

//* api/user
userRouter.post("/", createCurrentUser)