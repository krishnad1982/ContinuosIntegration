var express = require('express');
var tentacleRoute = express.Router();



var router = function () {

    tentacleRoute.route('/')
        .get(function (req, res) {
            res.render('tentacle');
        });
    return tentacleRoute;

};

module.exports = router;