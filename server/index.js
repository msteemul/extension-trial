require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {MONGOURI, PORT} = require('./keys/keys')
require('./models/user')

try{
    mongoose.connect(MONGOURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');

    // Handle connection errors
    mongoose.connection.on('error', (err) => {
        console.error('Error connecting to MongoDB:', err);
    });

} catch(err){
    console.error('Error connecting to MongoDB:', err);
}

app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});