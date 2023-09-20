import express from "express";

const app = express();

app.use(express.json());

const books = [
    {
        id: 1,
        title: "Lord of The Rings"
    },
    {
        id: 2,
        title: "The Hobbit"
    }
];

function getBookById(id) {
    return books.findIndex(book => {
        return book.id === Number(id);
    });
}

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
    books.push(req.body);
    res.status(201).send("Book successfully added!");
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

export default app;
