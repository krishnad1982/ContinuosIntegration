var express = require('express');
var requirementRoute = express.Router();



var router = function () {

    requirementRoute.route('/')
        .get(function (req, res) {
            res.render('requirements');
        });
    return requirementRoute;

};

module.exports = router;