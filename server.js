const express = require('express');
const Book = require('./src/models/Book');
const { where } = require('sequelize');

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).send("Node.js course");
});

app.get("/books", async (req, res) => {
    const book = await Book.findAll();   
    res.status(200).json(book);
});

app.get("/books/:id", async (req, res) => {
    const book = await Book.findAll({
        where: {
            id: req.params.id
        }
    });   
    res.status(200).json(book);
});

app.delete("/books/:id", async (req, res) => {
    
    await Book.destroy({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({
        message: "book deleted!"
    })
});

app.post("/books", (req, res) => {

    const book = Book.create(req.body);
    res.status(201).json({
        error: false,
        message: "Book created!"
    });
});

app.put("/books", async (req, res) => {
    await Book.update({
        title: req.body.title
    },
    {
        where: {
            id: req.body.id
        }
    })
    res.status(200).json({
        message: "Successfuly updated!"
    })
});

app.listen(3000, () => {
    console.log("listening");
});