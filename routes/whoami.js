var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    var ipaddress, language, software;
    ipaddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    language = req.headers['accept-language'];
    software = req.headers['user-agent'];
    // language = req.headers['accept-language'].split(',')[0];
    // var userAgent = req.headers['user-agent'];
    // var indexOfFirstBracket = userAgent.indexOf('(');
    // var software = userAgent.substring(indexOfFirstBracket + 1, userAgent.indexOf(')', indexOfFirstBracket));

    res.json({
        ipaddress: ipaddress,
        language: language,
        software: software
    });
    // res.json({
    //     ok: 'ok'
    // });
});

module.exports = router;