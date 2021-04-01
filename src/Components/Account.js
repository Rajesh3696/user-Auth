import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Account(props) {
const [user,setUser]=useState({})

useEffect(()=>{
    axios.get('http://dct-user-auth.herokuapp.com/users/account',{
        headers:{
            'x-auth':localStorage.getItem('token')
        }
    })
    .then((response)=>{
    
         setUser(response.data)
         
    })
    .catch((err)=>{
        alert(err.message)
    })
},[])
    return (
        <div >
            <p style={{fontFamily:"monospace",fontWeight:800,fontSize:20}}>UserName-{user.username}</p>
            <p style={{fontFamily:"monospace",fontWeight:800,fontSize:20}}>Email-{user.email}</p>
        </div>
    )
}

export default Account
