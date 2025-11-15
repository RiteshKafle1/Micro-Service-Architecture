import express from "express";
const app = express();
const PORT = 4500;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:4500`);
});
