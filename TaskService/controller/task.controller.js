import { channel } from "../config/rabbitMq.js";
import Task from "../models/task.model.js";

export const createTask = async (req, res) => {
  try {
    const { title, description, userId } = req.body;

    if (!title || !description || !userId)
      return res
        .status(400)
        .json({ success: false, message: "Fields are required" });

    const task = new Task({
      title,
      description,
      userId,
    });
    await task.save();

    const message = {
      taskId: task._id,
      userId,
      title,
    };

    if (!channel) {
      console.log("RabbitMq connection Error,Channel Not Found");
      return res
        .status(503)
        .json({ success: false, message: "Internal server Error" });
    }

    channel.sendToQueue("task_created", Buffer.from(JSON.stringify(message)));

    return res.status(201).json({ success: true, data: task });
  } catch (error) {
    console.log("Error in creating a task", error);
  }
};

export const getAllTask = async (_, res) => {
  try {
    const result = await Task.find({});

    if (!result || result.length === 0)
      return res
        .status(400)
        .json({ success: false, message: "Unable to fin the task" });

    return res.status(200).json({ success: true, result });
  } catch (error) {
    console.log("Error in fetching the users", error);
  }
};
