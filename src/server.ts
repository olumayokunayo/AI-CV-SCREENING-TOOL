import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/api/test", (req, res) => {
  res.json({ success: true, message: "Connection Successful" });
});

app.listen(PORT, () => {
  console.log(`SERVER is running on PORT: ${PORT}`);
});
