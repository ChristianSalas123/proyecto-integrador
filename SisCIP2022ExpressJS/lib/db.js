var mysql = require('mysql');
var connection = mysql.createConnection({
	multipleStatements: true,
	port: '3306',
	host:'localhost',
	user:'root',
	password:'',
	//nombre de la tabla
	database:'medicocr'
});
// definir conexion
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;
