const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("User");

const Signup = require('../api/auth/signup')

router.get('/', (req, res) => {
    res.send("Hello user");
})

router.post('/signup', Signup)