var mysql = require('mysql');
var connection = mysql.createConnection({
	multipleStatements: true,
	port: '3306',
	host:'localhost',
	user:'root',
	password:'',
	database:'medicocr'
});

connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;
