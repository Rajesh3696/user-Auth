import React,{useEffect,useState} from 'react'
import Notelist from './Notelist'
import Noteadd from './Noteadd'
import axios from 'axios'

function Notecontainer(props) {
    const [items, setItems] = useState([])
   
   
    const addItem=(note)=>{
        setItems([...items,note].reverse())
    }

    const removeItem=(id)=>{
            const result=items.filter((item)=>{
                return item._id !== id
            })
            setItems(result)
    }
     
    const editItem=(note)=>{
            const result=items.map((item)=>{
                if(item._id===note._id){
                        return {...item,...note}
                }
                else{
                    return{...item}
                }
            })
            setItems(result)
    }
    useEffect(()=>{
        axios.get(`http://dct-user-auth.herokuapp.com/api/notes`, {
            headers: {
                "x-auth": (localStorage.getItem('token'))
            }
        })
            .then((response) => {
                const result = response.data
                const reverseresult=[...result].reverse()
                setItems(reverseresult)
                console.log(reverseresult)
               
            }).catch((err) => {
                alert(err.message)
            })
    },[])
    return (
        <div className="conatiner-row">
            <Notelist items={items} removeItem={removeItem}  editItem={editItem}/>
            <Noteadd addItem={addItem}/>  
        </div>
    )
}

export default Notecontainer
