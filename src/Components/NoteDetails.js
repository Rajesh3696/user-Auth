import React, { useState, useEffect } from 'react' 
import axios from 'axios'
// import SweetAlert from 'sweetalert-react';
import Modal from 'react-modal'
import  styled from 'styled-components';
 
const Header = styled.h2`
  border: none;
  border-radius: 25px;
  padding: 10px;
  background-color: gray;
`;
function NoteDetails(props) {
    const {  id, handleToggle } = props
    const [ note, setNote ] = useState({})

    useEffect(() => {
        axios
            .get(`http://dct-user-auth.herokuapp.com/api/notes/${id}`, {
                headers: { "x-auth": localStorage.getItem("token") },
            })
            .then((response) => {
                const result = response.data;
                setNote(result)
            })    
            .catch((err) => {
                alert(err.message);
            });
    }, [id])

return (
    <div>
            <Modal
            // open={model}
             toggle={handleToggle}>
            <Modal.Header>
               <h3> {note.title}</h3>
                {note.body}
            </Modal.Header>
            </Modal>
    </div>
)
}

export default NoteDetails
