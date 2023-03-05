import { BookData } from "../models/bookDataSchema";
import { Request, Response } from "express";
import { bookModel } from "../models/bookDataSchema";

// adds a new book to the database
export async function addBook(req: Request, res: Response) {
  try {
    const book: BookData = new bookModel(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (err: unknown) {
    res.status(500).json({ error: err });
  }
}

// get all books from the database
export async function getAllBooks(req: Request, res: Response) {
  try {
    const books: BookData[] = await bookModel.find();
    res.json(books);
  } catch (err: unknown) {
    res.status(500).json({ error: err });
  }
}

// get a specific book from the database by giving id as params
export async function getBookByID(req: Request, res: Response) {
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
}

// delete a books from the database by providing id
export async function deleteBookByID(req: Request, res: Response) {
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
}

// update specific details of a book by providing id
export async function updateBookByID(req: Request, res: Response) {
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
}
