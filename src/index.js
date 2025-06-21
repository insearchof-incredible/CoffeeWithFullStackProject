import dotenv from "dotenv";
import connectDB from "./db/index.js";
//import app from "./app.js"; // ✅ Make sure you have this

// Load environment variables
dotenv.config({
  path: "./.env",
});
connectDB();
