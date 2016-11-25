var express = require('express');
var teamcityRoute = express.Router();



var router = function () {

    teamcityRoute.route('/')
        .get(function (req, res) {
            res.render('teamcity');
        });
    return teamcityRoute;

};

module.exports = router;