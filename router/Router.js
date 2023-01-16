const express = require('express')
const user = require('../Schema/userSchema.js')

const router = express.Router();


    router.post("/Sign", async (req, res) => {
        console.log('hello');
    const name = req.body.username;
    console.log(name);
    const email = req.body.email;
    const password = req.body.password;
    const con_pass = req.body.con_pass;
    const contact = req.body.contact;
    const data = req.body.data;
    try {
        const preuser = await user.findOne( { email: email })
    
        if (!preuser) {
            const adUser = new user({
                name: name, email: email, password: password, con_pass
                    : con_pass, contact: contact, location: data
    
            })
            await adUser.save();
            res.send({ Message: 'Signup Successful' })
            console.log('success')
        }
    
        else {
            res.send({ Message: "Username already Exist" })
    
        }
    
    
} catch (error) {
    res.send(error)
}
})

try {
    router.post("/Login", async (req, res) => {
        console.log('hello222');
        
    const email = req.body.email;
    const password = req.body.password;
   
    
        const preuser = await user.findOne( { email: email })
    
        if (preuser) {
            
            res.send({message: 'Login Successful', preuser})
    
            }
            else
            res.send({message: 'No user'})
        }
    
        
    
    )}
catch (error) {
    res.send(error)
}
module.exports= router;