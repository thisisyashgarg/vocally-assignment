import express from "express";
import {
  addBook,
  deleteBookByID,
  getAllBooks,
  getBookByID,
  updateBookByID,
} from "../controllers/booksController";

const router = express.Router();

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
