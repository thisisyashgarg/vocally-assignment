import mongoose, { Document } from "mongoose";

export interface BookData extends Document {
  title: string;
  author: string;
  description: string;
  publisher: string;
  publicationDate: Date;
}

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

export const bookModel = mongoose.model<BookData>("Book", bookSchema);
