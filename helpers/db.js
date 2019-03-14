const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true ,useCreateIndex: true,});
    mongoose.connection.on('open', () => {
        console.log('Connection Succesful!');
    });
    mongoose.connection.on('error', (err) => {
        console.log('Connection Error! ', err);
    });

    mongoose.Promise = global.Promise;
};