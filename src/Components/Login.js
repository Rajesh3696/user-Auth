import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './style.css'
import {Button} from 'react-bootstrap'


function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange=(e)=>{
        if(e.target.name==='email'){
            setEmail(e.target.value)
        }
        if(e.target.name==='password'){
            setPassword(e.target.value)
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            "email":email,
            "password":password
        }
         //validations 
            axios.post('http://dct-user-auth.herokuapp.com/users/login',formData)
            .then((response)=>{
                const result=response.data
                if(result.hasOwnProperty('errors')){
                    alert(result.errors)
                }
                else{
                    alert('successfully logged in' )
                    localStorage.setItem('token',result.token)
                    props.history.push('/')
                    props.handleAuth()
                }
            }).catch((err)=>{
                alert(err.message)
            })
    }
    return (
        <div className='container-login'>
            <div classname="form-group">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="text" class="form-control" value={email} name="email" onChange={handleChange}/><br />
                <label>Password</label>
                <input type="password" class="form-control" value={password} name="password" onChange={handleChange} /><br />
                <input type="submit" value="submit" id="btn-login"/>
                {/* <Button variant="success btn-lg" id="btn-login">Login</Button> */}
            </form>
            </div>
        </div>
    )
}

export default Login
