import { BookData } from "../models/bookDataSchema";
import { bookModel } from "../models/bookDataSchema";

export async function addDataToDB(data: BookData) {
  const book: BookData = new bookModel(data);
  await book.save();
  return book;
}

export async function getAllDataFromDB() {
  const books: BookData[] = await bookModel.find();
  return books;
}
