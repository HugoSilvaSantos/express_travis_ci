var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);  
});

// routes
app.get('/', function(req, res) {
    res.send('TEST!!');
});
app.get('/home', function(req, res) {
    res.send({'Message':'OK' });
});
module.exports = app;