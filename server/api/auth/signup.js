const mongoose = require('mongoose');
const User = require('../../models/user');
const bcrypt = require('bcryptjs');

async function Signup(req, res){
    const colorReset = '\x1b[0m';
    const colorRed = '\x1b[31m';
    const colorGreen = '\x1b[32m';
    const colorYellow = '\x1b[33m';
    const colorMagenta = '\x1b[35m';
    const {name, email, password} = req.body;
    console.log(colorMagenta + name, email,password + colorReset);
    if(!email || !password || !name){
        return res.status(422).json({error: "Please add all the fields"})
    }
    User.findOne({email: email}).then(
        (savedUser) =>{
            if(savedUser){
                return res.status(422).json({error: "User already exists with that email"})
            }

            bcrypt.hash(password, 12).then(hashedPassword => {
                const user = new User({
                    email,
                    password: hashedPassword,
                    name
                })
                console.log(colorYellow + user + colorReset);

                user.save().then(user => {
                    console.log(colorGreen + "User saved successfully" + colorReset);
                    res.json({message: "Saved successfully"})
                }).catch(err => {
                    console.log(err)
                })


            })


        }
    )

}
module.exports = Signup