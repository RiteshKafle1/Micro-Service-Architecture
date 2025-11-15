import express from "express";
import "dotenv/config";
import connectDb from "./config/db.config.js";
import userRouter from "./routes/user.route.js";
const app = express();



app.use(express.json());
app.use('/api/user',userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDb(process.env.MONGODB_URI);
  console.log(`UserService is running on http://localhost:${PORT}`);
});
