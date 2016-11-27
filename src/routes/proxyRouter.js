var express = require('express');
var proxyRoute = express.Router();



var router = function () {

    proxyRoute.route('/')
        .get(function (req, res) {
            res.render('proxy');
        });
    return proxyRoute;

};

module.exports = router;