import React, {useState} from 'react'
// import { useNavigate } from 'react-router-dom';
import '../App.css'
import {Link, useNavigate} from 'react-router-dom';
import Axios from 'axios'

export default function Login(props) {

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('');
    

    const onBtnClick=(e)=>{
        e.preventDefault();

        Axios.post('http://localhost:3080/Login', {
            email, password
        }).then(res=>{
            if(res.status===201)
            alert(res.data.Message)
            setUser(res.user)
            console.log(user);
            navigate('/Addcomplain')
            // console.log(res.data.Message);
            
        })
    }

    return (
        <>
            <div className="container">
                <h1 className="title">{props.title}</h1>
                <div className="mb-3">
                    <label htmlFor="main" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={email} id="mail" placeholder='Enter Email' name='email' onChange={(e)=>{setEmail(e.target.value)}} />
                </div>
                <div className="mb-3">
                    <label htmlFor="pass" className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} id="pass" placeholder='Enter Password' name='password' onChange={(e)=>{setPassword(e.target.value)}} />
                </div>

                <button type='button' className='btn btn-primary' onClick={onBtnClick}>Login</button>
                {/* <Link className='linkTag' to='/Signup'>Signup</Link> */}

            </div>
        </>
    )
}
