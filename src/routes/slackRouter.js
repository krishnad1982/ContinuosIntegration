var express = require('express');
var slackRoute = express.Router();



var router = function () {

    slackRoute.route('/')
        .get(function (req, res) {
            res.render('slack');
        });
    return slackRoute;

};

module.exports = router;