const socketio = require('socket.io')
    , io = socketio()
    , socketAuthorization = require('../middleware/socketAuthorization');
const socketApi = {
    io
};

//Socket Authorization
io.use(socketAuthorization);

/**
 * Redis adapter
 */
const redisAdapter = require('socket.io-redis');
io.adapter(redisAdapter({ 
    host: process.env.REDIS_URI, 
    port: process.env.REDIS_PORT 
}));

io.on('connection', socket => {
    console.log(socket.request.user.name + ' Logged In');
});

module.exports = socketApi;