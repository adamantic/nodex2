var express = require('express');

var app = express();

var handlebars = require ('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine','handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
    res.render('home');
});

app.get('/about', function(req,res){
    var randomFortune =
        fortunes[Math.floor(1)];
    res.render('about', {fortune: randomFortune});
});

//404 catch-all handler (middleware)
app.use(function(req,res, next){
    res.status(404);
    res.send('404 - not found');
});

//500 error handler (middleware)
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'),function(){
    console.log('express started on http://localhost:'+app.get('port')+'; Press Ctrl-C to terminate');
});

var fortunes = [
    "conquer your fears",
    "rivers need springs",
    "do not, fear not",
    "pleasant surprise"
]
