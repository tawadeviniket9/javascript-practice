var MySQL = require('mysql');

var connection = MySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my_db'
});
connection.connect(function (err) {
    if (err) {
            console.error('error connecting: ' + err.stack);
            return;
    }
console.log('connected as id ' + connection.threadId);
}
);