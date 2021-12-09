const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

const https = require('https');
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

var cors = require('cors');

// app.use(express.vhost('checkout.hscp.cl', require('/home/administrador/checkOut/web').app));
// app.use(express.vhost('checkin.hscp.cl', require(__dirname+'Prod/index.html').app));

app.use(cors({origin: 'http://localhost:5050'}));
app.use(express.static(path.join(__dirname, 'Prod')));
// app.use(express.static(path.join('/home/administrador/checkOut/web')));
// app.use(express.static(path.join('/home/administrador/frenonApi/img')));

app.get('*', (req, res) => {
	console.log("data servida",req.headers.host);
	res.sendFile(path.join(__dirname, 'Prod/index.html'));
});


const port = '5050';

const server = http.createServer(app);


server.listen(port,() => console.log(`web check is running in :${port} 🔥`));
