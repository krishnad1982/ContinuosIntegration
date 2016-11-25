var express = require('express');
var setttingsRoute = express.Router();



var router = function () {

    setttingsRoute.route('/')
        .get(function (req, res) {
            res.render('general');
        });
    return setttingsRoute;

};

module.exports = router;