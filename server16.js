var express = require('express');
var app = express();
var fs = require("fs");
var http = require("http");
var session1 = '';

app.get('/getsessionid', function (req, res) {
   var OpenTok = require('opentok'),
    opentok = new OpenTok('45592942', '92c49242824dd9e83890c8c282da3628e8d56752'); 
            opentok.createSession(function(err, session) {
            if (err) return console.log(err);
			session1 = session.sessionId;
			console.log('YOUR Session ID is:-'+session1);

       res.end( session1);
      
   });
})
app.get('/gettoken', function (req, res) {
   var OpenTok = require('opentok'),
    opentok = new OpenTok('45592942', '92c49242824dd9e83890c8c282da3628e8d56752'); 
          token = opentok.generateToken(session1);
console.log('');
console.log('');
console.log('YOUR Token is:-'+token); 
       res.end( token );
   })


app.get('/home',function(req, res){
    fs.readFile('client216.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
})



var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})



  

  