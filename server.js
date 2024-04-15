var express = require('express')
var app = express()

// set the view engine to ejs
app.set('view engine', 'ejs')

// index page
app.get('/', function(req, res) {
      var competitors = [
        { name: "Sammy", organization: "DigitalOcean", birth_year: 2012 },
        { name: "Tux", organization: "Linux", birth_year: 1996 },
        { name: "Moby Dock", organization: "Docker", birth_year: 2013 },
      ];
      var tagline =
        "Perfect coffee for everyone";
    res.render('pages/index', {
        competitors: competitors,
        tagline: tagline
    })
})

// about page
app.get('/about', function(req, res){
    res.render('pages/about')
})

app.listen(8080)
console.log('server starting on port 8080')
