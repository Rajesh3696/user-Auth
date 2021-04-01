import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'
import NoteDetails from './NoteDetails'
import Editnote from './Editnote'
const Wrapper = styled.div`
  display: flex;
`;
const Title = styled.h3`
  margin: 0.5em;
  padding: 0.5em;
  font-size: 1.3em;
  background: papayawhip;
  border: none;
  border-radius: 25px;
  &:hover {
    cursor: pointer;
  }
`;

const Button = styled.button`
  font-size: 1.3em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: none;
  border-radius: 25px;
  &:hover {
    cursor: pointer;
  }
`;
function Noteitem(props) {
  const { title, _id, body, removeItem, pageload,editItem } = props
  const [toggle, setToggle] = useState(false)

  const handleTitle = () => {
    setToggle(!toggle)
  }
  const handleToggle = () => {
    setToggle(!toggle)
  }
  const handleDelete = () => {
    const confirm = window.confirm('are you sure')
    if (confirm) {
      axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${_id}`, {
        headers: { "x-auth": localStorage.getItem("token") }
      })
        .then((response) => {
          const result = response.data
          // pageload()
          removeItem(result._id)
          //  console.log(result)
        }).catch((err) => {
          alert(err.message)
        })
    }
  }
  return (
    <div>
      {
        toggle?(
          <div>
          <Editnote 
            _id={_id}
            title={title}
            body={body}
            editItem={editItem}
            handleToggle={handleToggle}
          />
          <Button onClick={handleToggle}>cancel</Button>
          </div>
        ):(
          <Wrapper>
          <Title className="card-title" onClick={handleTitle}>{title}</Title>
          <Button onClick={handleDelete} className="btn-danger">Delete</Button>
          <Button onClick={handleToggle} >Edit</Button>
          {_id && (<NoteDetails id={_id} handleToggle={handleToggle} />)}
        </Wrapper>
        )
      }
     
    </div>



  )
}



export default Noteitem
