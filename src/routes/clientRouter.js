var express = require('express');
var clientRoute = express.Router();

var router = function () {
    clientRoute.route('/').
        get(function (req, res) {
            res.render('client');
        });
    return clientRoute;
}
module.exports = router;