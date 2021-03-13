const { hostname } = require('os');
const http = require('http');

const message = "Hello World \n";
const port = 8080;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	console.log("===============Reached the test Server===================== \n");
	res.end(message);
});

//server.listen(port, hostname, backlog, callback);
server.listen(port, hostname, () => {
	console.log(`Server up and running at http://${hostname()}:${port}/`);
});