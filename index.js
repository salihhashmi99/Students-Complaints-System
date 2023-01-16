const connectToMongo = require('./db')
const express = require('express')
const complains = require('./Schema/complainSchema')
const userSchema = require('./Schema/userSchema')

const cors = require('cors')

const app = express()

app.use(express())
connectToMongo();
app.use(cors({credential: true, origin: true}))

app.use(express.json())
const port=3080;

app.listen(port,()=>{
    console.log("Server is running")
})

const router = express.Router();
const complainRouter = express.Router();

router.post('/Sign', async(req, res)=>{
    const name= req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const con_pass = req.body.con_pass;

    console.log(name)

    try {
        const users =await userSchema.findOne({email: email, password: password})
        if(users){
            res.send({Message: 'User already exist'})
        }
        else{
            const user = new userSchema({
                name: name, email: email, password: password, con_pass: con_pass
            })
            await user.save();
            res.send({Message: 'Successful'})
        }
    } catch (error) {
        res.send(error)
    }
})

router.post('/Login', async(req, res)=>{
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await userSchema.findOne({email: email} && {password: password})
        if (user) {
            res.status(201).send({Message: 'Login Successful', user})
        } else {
            res.status(404).send({Message: 'User Not Found'})
        }
    } catch (error) {
        res.send(error)
    }
})

app.use(router)

complainRouter.post('/AddComplain', async(req, res)=>{
    const title = req.body.title;
    const description = req.body.description;

    try {
        const comp = new complains({
            title: title, description: description
        })
        await comp.save();
        res.send({Message: 'Complain Registered'})
    } catch (error) {
        res.send(error)
    }
})

complainRouter.get("/Viewcomp", async (req,res) => {

    complains.find({}, (err, result) =>{
        if(result){

            res.send(result)
            console.log(result);
        }
        else
         res.send('No user');
// console.log(result);
    })
})

complainRouter.delete('/deleteRecord:id', async(req, res)=>{
    const id = req.params.id;
    try {
        await  complains.findByIdAndDelete({_id: id})
        res.send({Message: 'Record Deleted'})
    } catch (error) {
        res.send(error)
    }
})
app.use(complainRouter)