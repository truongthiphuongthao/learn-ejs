const express = require('express')
const app = express()

// set view ejs
app.set('view engine', 'ejs')

// index page
app.get('/', (req, res) =>{
	// truyen data sang view
	var drinks = [
		{name: 'Jane', drunkness: 3},
		{name: 'Mark', drunkness: 5},
		{name: 'Lisa', drunkness: 10}
	]
	var tagline = "hello nice to meet you"
	res.render('pages/index', {
		drinks: drinks,
		tagline: tagline
	})
})
app.get('/about', (req, res) =>{
	res.render('pages/about', {name: 'Nam'})
})
app.listen(8080, function(err){
	console.log("Server is starting at port 8080")
})