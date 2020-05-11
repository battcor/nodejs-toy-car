const io = require('socket.io-client');
const socket = io('http://localhost:3000');

socket.on('connect', () => {
    var args = process.argv.slice(2);

    var data = {
        cmd: args[0],
        param: args[1]
    };

    socket.emit('remote', data);

    socket.disconnect()
});
