var express = require('express');
var router = express.Router();
var url = require('url');

router.get(/\/\d+/, function(req, res) {
    var dateStr = url.parse(req.url).pathname.substring(1);
    var date = new Date(Number(dateStr));
    res.json({
        unix: date.valueOf(),
        natural: date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    });
});

router.get(/\/[JFMAJASOND][a-z]+%20\d{2},%20\d{4}/, function(req, res) {
    var dateStr = url.parse(req.url).pathname.substring(1);
    console.log(dateStr);
    var date = new Date(decodeURI(dateStr));
    console.log(date);
    res.json({
        unix: date.valueOf(),
        natural: date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    });
});

module.exports = router;