var express = require('express');
var app = express();


var port = 3000;
var requirementRouter = require('./src/routes/requirementsRouter')();
var settingsRouter = require('./src/routes/settingsRouter')();
var teamcityRouter = require('./src/routes/teamcityRouter')();
var octopusRouter = require('./src/routes/octopusRouter')();
var projectRouter = require('./src/routes/projectRouter')();
var slackRouter = require('./src/routes/slackRouter')();
var tentacleRouter = require('./src/routes/tentacleRouter')();
var agentRouter = require('./src/routes/agentRouter')();

app.use(express.static('public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/requirements', requirementRouter);
app.use('/general', settingsRouter);
app.use('/teamcity', teamcityRouter);
app.use('/octopus', octopusRouter);
app.use('/projects', projectRouter);
app.use('/slack', slackRouter);
app.use('/tentacle', tentacleRouter);
app.use('/agent', agentRouter);


app.get('/', function (req, res) {
    res.render('index');
});

app.listen(port, function (err) {
    console.log('connectied to port ' + port);
});