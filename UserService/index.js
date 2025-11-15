import express from "express";
import "dotenv/config";
import connectDb from "./config/db.config.js";
const app = express();



app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDb(process.env.MONGODB_URI);
  console.log(`UserService is running on http://localhost:${PORT}`);
});
