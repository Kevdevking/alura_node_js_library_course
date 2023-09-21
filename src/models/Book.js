const Sequelize = require('sequelize');
const db = require('./dbconnect');

const Book = db.define('books', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false        
    }
});
//criar tabela
Book.sync();

//Verifica se a tabela existe e se existir só à altera
Book.sync({
    alter: true
});

module.exports = Book;