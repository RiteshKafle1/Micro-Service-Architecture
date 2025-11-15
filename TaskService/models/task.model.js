import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  title: String,
  description:String,
  userId:String,
},{timestamps:true});

const Task=mongoose.model('task',taskSchema);
export default Task;


