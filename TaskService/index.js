import express from "express";
import "dotenv/config";
import connectDb from "./config/db.config.js";
import taskRouter from "./routes/task.route.js";
const app = express();

app.use(express.json());
app.use('/task',taskRouter)

const PORT = proces.env.PORT || 3001;
app.listen(PORT, () => {
  connectDb(process.env.MONGODB_URI)
  console.log(`TaskService is running on http://localhost:${PORT}`);
});
