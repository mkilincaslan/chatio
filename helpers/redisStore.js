const session = require('express-session')
    , redis_store = require('connect-redis')(session);

module.exports = new redis_store({
    host: process.env.REDIS_URI,
    port: process.env.REDIS_PORT,
    pass: process.env.REDIS_PASS
});