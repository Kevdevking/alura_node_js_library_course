const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('alurabooks', 'root', 'root',{
    dialect: 'mysql',
  });

  sequelize.authenticate()
  .then(function(){
      console.log('Sucesso com Database')
  }).catch(function(){
      console.error('Erro ao conectar com Database')
  })

  module.exports = sequelize;