var express = require('express');
var projectRoute = express.Router();



var router = function () {

    projectRoute.route('/')
        .get(function (req, res) {
            res.render('projects');
        });
    return projectRoute;

};

module.exports = router;