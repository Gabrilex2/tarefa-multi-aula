const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'catolica',
  database: 'userdb',
  port:3307
})

db.connect(err =>{
if (err) throw err;
console.log('conectando ao banco de dados')
})
module.exports = db

db.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

db.end()
