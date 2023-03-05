import mongoose, { Document } from "mongoose";

// this interface provides a type to the mogoose schema of data and provides dot properties to model like save()
export interface BookData extends Document {
  title: string;
  author: string;
  description: string;
  publisher: string;
  publicationDate: Date;
}

// the data schema with timestamps
const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    publisher: {
      type: String,
      required: false,
    },
    publicationDate: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true }
);

//mongoose model of schema that can be exported and used to do CRUD
export const bookModel = mongoose.model<BookData>("Book", bookSchema);
