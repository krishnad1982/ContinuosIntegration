var express = require('express');
var agentRoute = express.Router();



var router = function () {

    agentRoute.route('/')
        .get(function (req, res) {
            res.render('agent');
        });
    return agentRoute;

};

module.exports = router;