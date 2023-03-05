import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import bookRoutes from "./routes/Books";
import { config } from "dotenv";
import limiter from "./services/rateLimiter";
config();

//establishing a secure connection with mongodb
mongoose
  .connect(
    `mongodb+srv://yashg:${process.env.MONGODB_PASSWORD}@cluster0.3awaay3.mongodb.net/books?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("error connecting to db", err);
  });

//creating an express instance
const app = express();
const port = 5432;

// allow app to accept json data
app.use(bodyParser.json());

//middleware to accept form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// limiter is rate limiting the api requests
app.use("/books", limiter, bookRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
