import React from 'react'
import NoteForm from './NoteForm'
import axios from 'axios'
function Editnote(props) {
    const{_id,title,body,editItem,handleToggle}=props

    const formSubmit=(note)=>{
        axios.put(`http://dct-user-auth.herokuapp.com/api/notes/${_id}`,note,{
            headers: { "x-auth": localStorage.getItem("token") }
        })
            .then((response)=>{
                 const result=response.data 
                 console.log(result)  
                 editItem(result)
                 handleToggle()
            })
            .catch((err)=>{
                alert(err.message)
            })
        
    }
    return (
        <div>
            <NoteForm id={_id} title={title} body={body} formSubmit={formSubmit}/> 
        </div>
    )
}

export default Editnote
