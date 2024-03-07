const Sequelize = require("sequelize");

/*
 serve par conectar Sequelie com sql sever r2 2008
*/
const connection = new Sequelize('siscom','sa','',{
    
    dialect: 'mssql',
    host: 'localhost',
    port: '1433',
    dialectOptions: {
    options: {
      encrypt: false,
      enableArithAbort: false
    }
  }
});

module.exports = connection;