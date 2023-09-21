const express = require('express');
const Book = require('./models/Book');

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).send("Node.js course");
});

app.get("/books", (req, res) => {
    res.status(200).json(books);
});

app.delete("/books/:id", (req, res) => {
    const index = getBookById(req.params.id);
    books.splice(index, 1);
    res.status(200).send("book deleted!")
});

app.post("/books", (req, res) => {

    const book = Book.create(req.body);
    res.status(201).json({
        message: "livro criado com sucesso",
        book: book
    }); 
});

app.put("/books/:id", (req, res) => {
    const index = getBookById(req.params.id);
    if (index !== -1) {
        books[index].title = req.body.title;
        res.status(200).json(books[index]);
    } else {
        res.status(404).send("Book not found");
    }
});

app.listen(3000, () => {
    console.log("listening");
});
