import React,{useState} from 'react'
import NoteForm from './NoteForm'
import axios from 'axios'
function Noteadd(props) {
    const{addItem}=props
    // const[status,setStatus]=useState(false)

    const formSubmit=(note)=>{
    axios.post('http://dct-user-auth.herokuapp.com/api/notes',note, {
        headers: {
            'x-auth': localStorage.getItem('token')
        }
    })
        .then((response) => {
            const result = response.data
            console.log(result)
            addItem(result)
            // setStatus(true)
            
        })
        .catch((err) => {
            alert(err.message)
        })
}
    return (
        <div style={{borderStyle:"solid",marginLeft:1000,marginRight:100,borderRadius:10,backgroundColor:"powderblue"}}>
            <h1 style={{marginLeft:100,marginBottom:25,color:"chocolate"}}>Add Task</h1>
            <NoteForm formSubmit={formSubmit}/>
        </div>
    )
}

export default Noteadd
