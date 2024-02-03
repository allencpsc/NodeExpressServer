var express = require('express');
var app = express();
var bodyParser = require("body-parser")
var axios = require('axios').default

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use('/static', express.static('public'));
app.set('view engine', 'ejs');

// OLD RENDER FROM LECTURE
// app.get('/', function(req, res){
//     axios.get('https://xkcd.com/info.0.json').then(function(response){
//         console.log(response.data)
//         res.render('home.ejs', {name: null, xkcdData: response.data});
//     })
// })

app.get('/', function(req, res){
    res.render('counter.ejs')
})

app.get('/path/:name', function(req, res){
    let name = req.params.name;
    //console.log(name)
    res.render('home.ejs',{name: name});
})

app.get('/query', function(req, res){
    let name = req.query.name;
    //console.log(name)
    let nameObject = {name: name}
    res.render('home.ejs', nameObject);
})

app.post('/create', (req, res) => {
    console.log(req.body)
    //make sure app doesnt get stuck on create page
    res.redirect('/')
})

// put/post need body, get/delete does not
app.listen(3000, () => {
    console.log('started on port 3000');
})


// path param REQUIRED /home/4557392/...
// query param /home?foo=bar&bar=foo
// PUT & POST / CREATE & UPDATE body, from a form


