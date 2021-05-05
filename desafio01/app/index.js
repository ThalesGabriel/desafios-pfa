const express = require('express')
const mysql = require('mysql')
const app = express()
const path = require('path')
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    port: 3305,
    password: '',
    database:'nodedb'
};

const courses = [ "Docker", "Padrões e técnicas avançadas com Git e Github", "Integração contínua"]
const createDb = 'CREATE DATABASE IF NOT EXISTS nodedb'
const useDb = 'use nodedb'
const createTable = 'CREATE TABLE IF NOT EXISTS courses (id int not null AUTO_INCREMENT, name varchar(255), PRIMARY KEY (id))'
let sqlInsert = `INSERT INTO courses(name) values `
const sqlRemove = `DELETE FROM courses`

const connection = mysql.createConnection(config)

courses.map(course => sqlInsert += `("${course}"),`)
sqlInsert = sqlInsert.substr(0, sqlInsert.length-1)

connection.query(createDb)
connection.query(useDb)
connection.query(createTable)
connection.query(sqlRemove)
connection.query(sqlInsert)

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