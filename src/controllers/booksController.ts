import { BookData } from "../models/bookDataSchema";
import { addDataToDB, getAllDataFromDB } from "../service/books";
import { Request, Response } from "express";

export async function addBookToDB(req: Request, res: Response) {
  try {
    const book: BookData = await addDataToDB(req.body);
    res.status(201).json(book);
  } catch (err: unknown) {
    res.status(500).json({ error: err });
  }
}

export async function getAllBooksFromDB(req: Request, res: Response) {
  try {
    const books = getAllDataFromDB();
    res.json(books);
  } catch (err: unknown) {
    res.status(500).json({ error: err });
  }
}
