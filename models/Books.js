import mongoose from 'mongoose';

const prodctSchema = new mongoose.Schema({
  Tittle: { type: String, required: true },
  Publication: { type: String, required: true },
  Author: { type: String, required: true },
  cost: { type: Number, default: 0, required: true },
  category: { type: String, required: true },
  publishedAt: { type: Number, default: 0, required: true },
  createdAt:  {timestamps:true},
  isBestSeller: { type: Number, default: 0, required: true },
  updatedAt: { type: Number, default: 0, required: true },
});

const bookModel = mongoose.model("Books", bookSchema);

export default bookModel;