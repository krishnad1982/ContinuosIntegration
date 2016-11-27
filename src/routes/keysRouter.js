var express = require('express');
var keysRoute = express.Router();



var router = function () {

    keysRoute.route('/')
        .get(function (req, res) {
            res.render('keys');
        });
    return keysRoute;

};

module.exports = router;