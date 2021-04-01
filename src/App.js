// import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react'
import Navbar from './Components/Navbar'


function App(props) {
  const[toggle,setToggle]=useState(false)

  const handleAuth=()=>{
    setToggle(!toggle)
  }
  useEffect(()=>{
    if(localStorage.getItem('token')){
      handleAuth()
    }
  },[])
  
  return (
    <div className="app">
      <Navbar toggle={toggle} handleAuth={handleAuth}/>
    </div>
  );
}

export default App;
