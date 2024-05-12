const WebSocket = require('ws');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        // Here you would handle messages
        ws.send(message);
    });
    ws.send("connected");
});

server.listen(8080, function() {
    console.log('Listening on http://localhost:8080');
});