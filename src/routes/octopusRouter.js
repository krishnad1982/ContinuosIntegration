var express = require('express');
var octopusRoute = express.Router();



var router = function () {

    octopusRoute.route('/')
        .get(function (req, res) {
            res.render('octopus');
        });
    return octopusRoute;

};

module.exports = router;