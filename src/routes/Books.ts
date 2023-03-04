import express from "express";
import { addBookToDB, getAllBooksFromDB } from "../controllers/booksController";
import { BookData, bookModel } from "../models/bookDataSchema";

const router = express.Router();

// add a book
router.post("/", addBookToDB);

// Get all books
router.get("/", getAllBooksFromDB);
// Get a single book
router.get("/:id", async (req, res) => {
  try {
    const book: BookData | null = await bookModel.findById(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (err: unknown) {
    res.status(500).json({ error: err });
  }
});

// delete a book
router.delete("/:id", async (req, res) => {
  try {
    const book: BookData | null = await bookModel.findByIdAndDelete(
      req.params.id
    );
    if (book) {
      res.json({ message: "Book deleted successfully" });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (err: unknown) {
    res.status(500).json({ error: err });
  }
});

// Update a book
router.put("/:id", async (req, res) => {
  try {
    const book: BookData | null = await bookModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (err: unknown) {
    res.status(500).json({ error: err });
  }
});

export default router;
