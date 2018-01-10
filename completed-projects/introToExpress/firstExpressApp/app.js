var express = require('express');
var app = express();

// '/' => 'Hi there!'
app.get('/', function(req, res) {
    res.send('Hi there!');
});

// '/bye' => 'Goodbye!'
app.get('/bye', function(req, res) {
    res.send('Goodbye!');
});

// '/dog' => 'MEOW!'
app.get('/dog', function(req, res) {
    res.send('MEOW!');
});

app.get('/r/:subredditName', function(req, res) {
    res.send('Welcome to a Route Parameter page!');
});

app.get('/r/:username/comments/:id/:title', function(req, res) {
    console.log(req.params);
    res.send('Welcome to the Users comments page');
});

app.get('*', function(req, res) {
    res.send('Page Not Found');
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log('Server has started!!!');
});