var sql = require("mssql");
var connect = function()
{
    var conn = new sql.ConnectionPool({
        user:'sa',
        password:'Password@123',
        server:'GECKO',
        database:'TEST',
        options: {
            "encrypt": true,
            "enableArithAbort": true
            },
        port: 1433,
    });
    return conn;
};

module.exports = connect;