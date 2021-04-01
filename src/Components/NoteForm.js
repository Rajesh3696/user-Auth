import axios from 'axios'
import React, { useState } from 'react'

function NoteForm(props) {
    const{formSubmit,id:No,title:noteTitle,body:noteBody}=props
    const [title, setTitle] = useState(noteTitle?noteTitle:'')
    const [body, setBody] = useState(noteBody?noteBody:'')
   


    const handlechange = (e) => {
        if (e.target.name === 'title') {
            setTitle(e.target.value)
        }
        if (e.target.name === 'body') {
            setBody(e.target.value)
        }
    }

    const runValidation=()=>{
        if(title.length===0){
                alert("title cannot be blank")  
        }
    }

    const handleSubmit = (e) => {
         e.preventDefault()
        
        const formdata = {
            'title': title,
            'body': body
        }
        runValidation()
       formSubmit(formdata)
       setTitle('')
       setBody('')
    }
    return (
        <div className="container-row " style={{width:200,marginLeft:50,marginTop:-20}}>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" className="form-control" value={title} name="title" onChange={handlechange} /><br /><br />
                <label>Body</label>
                <textarea value={body}  className="input-group  " name='body' onChange={handlechange}  style={{height:100}}/><br />
                <input type="submit" value="Save" style={{width:60,height:30,backgroundColor:"coral",marginLeft:50,fontSize:15,fontFamily:"sans-serif"}} />
            </form>

        </div>
    )
}

export default NoteForm
