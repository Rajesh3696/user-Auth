import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {Button} from 'react-bootstrap'
// import './ src/App.css'
import './style.css'
function Register(props) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e) => {
        if (e.target.name === 'username') {
            setUsername(e.target.value)
        }
        if (e.target.name === 'email') {
            setEmail(e.target.value)
        }
        if (e.target.name === 'password') {
            setPassword(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        //validations
        e.preventDefault()
        const formData = {
            'username': username,
            'email': email,
            'password': password
        }
        axios.post('http://dct-user-auth.herokuapp.com/users/register',formData)
        .then((response) => {
            const result=response.data
            if(result.hasOwnProperty('errors')){
                alert(result.errors)
            }
            else{
               alert ('successfully created user')
               props.history.push('/login')
            }
        }).catch((err)=>{
            alert(err.message)
        })
    }
    return (
        <div className="container-register">
        <div className="form-group">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}  >
                
                <label >Username</label>
                <input class='form-control' type="text" value={username} name="username" onChange={handleChange} /><br /><br />
               
                <label>Email</label>
                <input  class='form-control' type='text' value={email} name="email" onChange={handleChange} /><br /><br />
                <label>Password</label>
                <input  class='form-control' type="password" value={password} name="password" onChange={handleChange} /><br />
                 <input type="submit" value="Register" id="btn"/> 
            {/* <Button variant=" btn-lg" id="btn">Register</Button> */}
            </form>
            </div>
        </div>
    )
}

export default Register
