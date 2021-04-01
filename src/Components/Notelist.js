import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Noteitem from './Noteitem'

function Notelist(props) {
    // const[status,setStatus]=useState(false)
    const{items,removeItem,editItem}=props
    
    
    return (
        <div className="card w-25" style={{marginLeft:200,marginTop:10,backgroundColor:"GrayText"}}>  
        <div className="card-body">
            {
                items.length===0?(
                    <div>
                    <h3 >No task found</h3>
                <p>Add your first task</p>
                </div>
                )
                :(
                    <div>
                    <h1>my tasks-{items.length}</h1>
                    {
                        items.map((item) => {
                          return  <Noteitem {...item} key={item._id}  title={item.title} body={item.body} removeItem={removeItem} editItem={editItem} />
                        })
                    }
                    </div>
                )
            }
</div>
        </div>
    )
}

export default Notelist
