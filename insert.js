var mysql = require('mysql2');
var con = mysql.createConnection({
    host: "localhost",
    user: "phpmyadmin",
    password: "aluno",
    database: "mydb"
});
con.connect(function (err) {
    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});
