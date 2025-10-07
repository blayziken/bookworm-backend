import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// Middlewares
app.use(rateLimiter);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Index");
});

app.get("/health", (req, res) => {
  res.send("API is running!");
});

app.listen(process.env.PORT, () => {
    console.log("Server is running on port:", process.env.PORT);
})
