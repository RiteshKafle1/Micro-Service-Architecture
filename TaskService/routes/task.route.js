import express from "express";
import { createTask, getAllTask } from "../controller/task.controller.js";

const taskRouter = express.Router();

taskRouter.post("/", createTask);
taskRouter.get("/", getAllTask);

export default taskRouter;
