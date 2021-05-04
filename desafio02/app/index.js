const express = require('express')
const mysql = require('mysql')
const app = express()
const path = require('path')
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};


const connection = mysql.createConnection(config)

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

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