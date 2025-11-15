import express from "express";
import {getAllUser, registerUser} from '../controller/user.controller.js';
const userRouter=express.Router();

userRouter.post('/',registerUser);
userRouter.get('/',getAllUser);
export default userRouter;