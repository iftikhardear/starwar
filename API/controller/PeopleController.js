var express = require('express');
var router = express.Router();
var sql = require("mssql");
var conn = require("../connection/connect")();
var data = require("./data.json");


var routes = function()
{
    // To Read data from SQL Server

    // router.route('/')
    //     .get(function(req, res)
    //     {   
    //         conn.connect().then(function(){
    //             var sqlQuery = "SELECT * FROM PEOPLE";
    //             var req = new sql.Request(conn);
    //             req.query(sqlQuery).then(function(recordset)
    //             {
    //                 res.json(recordset.recordset);
    //                 conn.close();
    //             })
    //             .catch(function(err){
    //                 conn.close();
    //                 res.status(400).send("Error while retrieving data");
    //             });
    //         })
    //         .catch(function(err){
    //             conn.close();
    //             res.status(400).send("Error while connecting to  database");
    //         });
    //     });
    //     return router;

    //To Read Data from a Data file
    router.route('/')
    .get(function(req, res)
    {   
        res.json(data);
    });
    return router;

};
module.exports = routes;