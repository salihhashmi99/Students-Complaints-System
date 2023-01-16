import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import '../App.css'
import { Link } from 'react-router-dom';
//promise based http  protocol
import axios from 'axios'

export default function Signup() {

    const [username, setName]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [con_pass, setCon_Pass]= useState('')

    // const [para, setPara]= useState('')
    const navigate = useNavigate();

    // const onChangePressed = (event) => {
    //     setInputs({
    //         ...inputs,
    //         [event.target.name]: event.target.value
    //     })
    //const data = document.getElementById('vari').innerHTML;
    // }
    
    const toBackEnd =  (e) => {
        e.preventDefault();
        console.log('hello');
       
        // const { name, email, password, con_pass, contact, location } = inputs; 
         axios.post("http://localhost:3080/Sign", {
             username, email, password, con_pass
        }, console.log(username)).then(res => {
            alert(res.data.Message)
            navigate('/signin')
            
        })

        console.log('hello2');
    
        }
        // navigate('/Login')
    
    return (
        <>
        
            <div className="container">
                {/* <h1 className="title">{props.title}</h1> */}

                    <form action="">
                
                <div>
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='name' autoComplete='OFF' value={username} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name" />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label"> Email</label>
                    <input type="email" className="form-control" id="email" name='email' autoComplete='OFF' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email" />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' id="password" autoComplete='OFF' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password" />
                </div>

                <div className="mb-3">
                    <label htmlFor="con_pass" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" name='con_pass' id="con_pass" autoComplete='OFF' value={con_pass} onChange={(e)=>{setCon_Pass(e.target.value)}} placeholder="Reenter Password" />
                </div>

                <button type='button' className='btn btn-primary' onClick={toBackEnd}>Signup</button></form>

            </div>

        </>
    )
}
