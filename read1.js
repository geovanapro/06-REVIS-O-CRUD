const mysql = require('mysql2');
// Configuração de conexão com o banco de dados
const connection = mysql.createConnection({
    host: "localhost",
    user: "phpmyadmin",
    password: "aluno",
    database: "mydb"
});
// Função para inserir 20 registros na tabela 'customers'
function inserirRegistros() {
connection.connect((err) => {
if (err) {
console.error('Erro ao conectar ao banco de dados:', err);
return;
}
// Cria um array com 20 registros fictícios
const registros = [];
for (let i = 1; i <= 20; i++) {
registros.push({ name: `Cliente ${i}`, address: `Endereço ${i}` });
}
// Insere os registros na tabela 'customers'
connection.query('INSERT INTO customers (name, address) VALUES ?',
[registros.map((registro) => [registro.name, registro.address])], (error, results) => {
if (error) {
console.error('Erro ao inserir registros:', error);
} else {
console.log('Registros inseridos com sucesso!');
}
// Fecha a conexão com o banco de dados
connection.end();
});
});
}
// Chama a função para inserir registros
inserirRegistros();


const mysql = require('mysql2');
// Configuração de conexão com o banco de dados
const connection = mysql.createConnection({
    host: "localhost",
    user: "phpmyadmin",
    password: "aluno",
    database: "mydb"
});
// Função para ler 10 registros da tabela 'customers'
function lerRegistros() {
connection.connect((err) => {
if (err) {
console.error('Erro ao conectar ao banco de dados:', err);
return;
}
// Query para ler 10 registros da tabela 'customers'
connection.query('SELECT * FROM customers LIMIT 10', (error, results)
=> {
if (error) {
console.error('Erro ao ler registros:', error);
} else {
console.log('Registros lidos:');
results.forEach((registro) => {
console.log(`Nome: ${registro.name}, Endereço: ${registro.address}`);
});
}
