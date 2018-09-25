var express = require('express');
var socket = require('socket.io');

var app = express();
var server = app.listen(process.env.PORT || 3000, process.env.IP, () => console.log("Server is running"));

var io = socket(server);

app.use(express.static(__dirname + '/public'));

io.sockets.on('connection', (socket) => {
  console.log('new connection: ' + socket.id);
  socket.on('bright', data => {
    socket.broadcast.emit('bright', data);
    console.log(data);
  });
});