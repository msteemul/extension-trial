require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {MONGOURI, PORT} = require('./keys/keys')
const router = express.Router();
const Signup = require('./api/auth/signup')
const cors = require('cors');


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
require('./models/user')
// app.use(require('./routes/route'))

router.get('/', (req, res) => {
    res.send("Hello user"); 
})

router.post('/signup', Signup)

// router.post('/signup', Signup)
app.use(cors());
app.use('/', router);
app.use('/signup', router)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});