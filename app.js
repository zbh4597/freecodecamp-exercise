var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/whoami', function(req, res) {
    var ipaddress = req.connection.remoteAddress;
    var language = req.headers['accept-language'].split(',')[0];
    var userAgent = req.headers['user-agent'];
    var indexOfFirstBracket = userAgent.indexOf('(');
    var software = userAgent.substring(indexOfFirstBracket + 1, userAgent.indexOf(')', indexOfFirstBracket));

    res.json({
        ipaddress: ipaddress,
        language: language,
        software: software
    });
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});