import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import bookRoutes from "./routes/Books";
import { config } from "dotenv";
config();

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

const app = express();
const port = 5432;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/books", bookRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
