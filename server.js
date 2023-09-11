var express = require('express');
const cors = require('cors'); // Import the cors middleware
var app = express();

// Use the cors middleware with default options (allows requests from any origin)
app.use(cors());

app.get('/api/data', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'dmad',
        password: 'myPass',
        server: 'localhost', 
        database: 'project' ,
        options: {
            trustedConnection: true,
            encrypt: true,
            enableArithAbort: true,
            trustServerCertificate: true,
        
          }
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from mixtape', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            //res.send(recordset);
            const data = recordset;
            res.json(data);
            
        });
    });
});



var server = app.listen(5000, function () {
    console.log('Server is running..');
});