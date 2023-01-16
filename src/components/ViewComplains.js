import React, {useState} from 'react'
import Axios from 'axios'
import { useEffect } from 'react';
import {Link} from 'react-router-dom'

export default function ViewComplains() {
    const [records, setRecords] = useState([]);

    window.addEventListener('load', ()=>{
        Axios.get('http://localhost:3080/Viewcomp').then(res=>
        {setRecords(res.data)},
        console.log(records))
    })

    // useEffect(()=>{
    //     Axios.get('http://localhost:3080/Viewcomp').then(res=>
    //     {setRecords(res.data)},
    //     console.log(records))
    // }, [])


   const deleteRecord=(id)=>{
       Axios.delete(`http://localhost:3080/deleteRecord${id}`, console.log(id)).then(res=>{
        alert(res.data.Message)
       })
   }
    
        return (
            <>
         
{
    records.map((value, key)=>(

                <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{value.title}</h5>
                  <p className="card-text">{value.description}</p>
                  <button type='button' onClick={()=>{deleteRecord(value._id)}}>DELETE RECORD</button>
                </div>
              </div> 
    ))
}
               
             
             
            </>
          )
        }
