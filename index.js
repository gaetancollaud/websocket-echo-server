var port = 8080;
var wss = new require('ws').Server({ port: port });

console.log(`Starting websocket on ${port}`);

wss.on('connection', function connection(ws) {
	ws.on('message', function(message) {
		console.log(`new message: ${message}`);
		ws.send(message);
	});

	console.log(`new client`, ws);
});
