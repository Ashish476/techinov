import express from 'express';
import Book from '../models/bookModel';

const router = express.Router();



router.get("/:id", async (req, res) => {
  const Book = await Book.findOne({ _id: req.params.id });
  if (Book) {
    res.send(Book);
  } else {
    res.status(404).send({ message: "Book Not Found." });
  }
});

//update

router.put("/:id", async (req, res) => {
  const BookId = req.params.id;
  const Book = await Book.findById(BookId);
  if (Book) {
    Book.Tittle = req.body.Tittle;
    Book.Publication = req.body.Publication;
    Book.Author = req.body.Author;
    Book.cost = req.body.cost;
    Book.category = req.body.category;
    Book.publishedAt = req.body.publishedAt;
    Book.createdAt = req.body.createdAt;
    const updatedBook = await Book.save();
    if (updatedBook) {
      return res.status(200).send({ message: 'Book Updated', data: updatedBook });
    }
  }
  return res.status(500).send({ message: ' Error in Updating Book.' });

});

//delete
router.delete("/:id", isAuth, isAdmin, async (req, res) => {
  const deletedBook = await Book.findById(req.params.id);
  if (deletedBook) {
    await deletedBook.remove();
    res.send({ message: "Book Deleted" });
  } else {
    res.send("Error in Deletion.");
  }
});

//create 
router.post("/", async (req, res) => {
  const Book = new Book({
    Tittle: req.body.Tittle,
    publication: req.body.publication,
    Author: req.body.Author,
    publishedAt: req.body.publishedAt,
    category: req.body.category,
    CreatedAt: req.body.CreatedAt,
    UpdateAt: req.body.UpdateAt,
    cost: req.body.cost,
    isBestSeller: req.body.isBestSeller,
  });
  const newBook = await Book.save();
  if (newBook) {
    return res.status(201).send({ message: 'New Book Created', data: newBook });
  }
  return res.status(500).send({ message: ' Error in Creating Book.' });
})


export default router;