const mysql = require('mysql2/promise');  // usando a versão promise para async/await

const pool = mysql.createPool({
  host: 'localhost',
  user: 'admin',      
  password: '123456',    // senha do usuário
  database: 'projetopdv',   // seu banco de dados criado no MariaDB
  port: 3306,               // porta padrão do MariaDB/MySQL no XAMPP
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;