import express from "express";
import {registerUser} from '../controller/user.controller.js';
const userRouter=express.Router();

userRouter.post('/',registerUser);
userRouter.get('/',registerUser);
export default userRouter;