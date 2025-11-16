import express from "express";
import "dotenv/config";
import connectDb from "./config/db.config.js";
import taskRouter from "./routes/task.route.js";
import connetRabbitMq from "./config/rabbitMq.js";
const app = express();

app.use(express.json());
app.use("/task", taskRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, async() => {
  await connetRabbitMq();
  connectDb(process.env.MONGODB_URI);
  console.log(`TaskService is running on http://localhost:${PORT}`);
});
