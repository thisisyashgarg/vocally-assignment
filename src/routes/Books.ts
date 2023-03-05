import express from "express";
import {
  addBook,
  deleteBookByID,
  getAllBooks,
  getBookByID,
  updateBookByID,
} from "../controllers/booksController";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import YAML from "yaml";

//reading the docs from yaml file
const file = fs.readFileSync("swagger.yaml", "utf8");
const swaggerDocument = YAML.parse(file);

const router = express.Router();

//providing docs url to swagger
router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// add a book
router.post("/", addBook);

// Get all books
router.get("/", getAllBooks);

// Get a single book
router.get("/:id", getBookByID);

// delete a book
router.delete("/:id", deleteBookByID);

// Update a book
router.put("/:id", updateBookByID);

export default router;
