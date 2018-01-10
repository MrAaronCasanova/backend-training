var express = require('express');
var app = express();

// Tells express to look in public folder
// for things like linked stylesheets or scripts
// (Tell express to serve the public directory)
app.use(express.static('public'));

// This makes it so we don't explicitly
// have to specify .ejs files
// ex. res.render(home.ejs || love.ejs || posts.ejs)
// (All our templates are .ejs unless otherwise noted)
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/fallinlovewith/:thing', function(req, res) {
    var thing = req.params.thing;
    res.render('love', {thingVar: thing});
});

app.get('/posts', function(req, res) {
    var posts = [
        {title: 'Post 1', author: 'Susy'},
        {title: 'My adorable pet', author: 'Charlie'},
        {title: 'Can you believe', author: 'Aaron'},
    ];
    
    res.render('posts', {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log('Server has started!!!');
});
