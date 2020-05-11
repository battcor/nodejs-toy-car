var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/car.png', function (req, res) {
    res.sendFile(__dirname + '/car.png');
});

io.on('connection', function (socket) {
    socket.on('remote', function (msg) {
        io.emit('remote', msg);
    });
});

http.listen(port, function () {
    console.log('listening on *:' + port);
});
