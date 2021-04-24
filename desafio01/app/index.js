const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)
const courses = [ "Docker", "Padrões e técnicas avançadas com Git e Github", "Integração contínua"]
let sqlInsert = `INSERT INTO courses(name) values `
courses.map(course => sqlInsert += `("${course}"),`)
sqlInsert = sqlInsert.substr(0, sqlInsert.length-1)
const sqlRemove = `DELETE FROM courses`
connection.query(sqlRemove)
connection.query(sqlInsert)

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function (req, res) {
    var sql = 'SELECT name FROM courses'
    connection.query(sql, function (err, data, fields) {
        if (err) throw err
        res.render('index.ejs', { courses: data })
        connection.end
    });
});

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})