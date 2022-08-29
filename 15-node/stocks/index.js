const express = require('express');
const ejs = require('ejs');
const _ = require('underscore');
const axios = require('axios');
const quote = require('stock-quote');
const stockfinder = require('stockfinder');

const server = express();
server.set('view-engine', ejs);
server.use(express.static('public')); // put the public folder "online"

const PORT = 8888;
const API_KEY = 'pk_16a849fd637243a79fff90fa4d42bc5d';

server.get('/', (req, res) => {
	res.render('home.ejs');
});

server.get('/search', (req, res) => {
	res.render('search.ejs');
});

server.get('/price', (req, res) => {
	console.log(req.query.code);
	quote.getQuote(req.query.code).then((response) => {
		console.log(JSON.stringify(response, null, 4));
		res.render('price.ejs', {price: response.currentPrice, symbol: response.symbol});
	});

	// stockfinder version
	// stockfinder.getStock({tocker: req.query.code, apiKey: API_KEY}).then((result) => {
	// 	res.render('info.ejs', { symbol: req.query.symbol, price: result.price })
	// })
})

server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }`));