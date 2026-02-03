const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config(); 

mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 5000,
})


mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to DB');
});

mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error:', err);
}); 


module.exports = mongoose;