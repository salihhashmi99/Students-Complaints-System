import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddComplain() {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const registerComplain=()=>{
        axios.post('http://localhost:3080/AddComplain', {
            title, description
        }).then(res=>{
            alert(res.data.Message)
        })
    }

    const viewComplain=()=>{
navigate('/ViewComplains')
    }
    return (
        <>
        <button className='btn btn-primary' id='readBtn' onClick={viewComplain}>View All Complains</button>
            <form action="">

                <div>
                    <label htmlFor="title" className="form-label">Complain Title</label>
                    <input type="text" className="form-control" id="title" name='title' autoComplete='OFF' value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder="Enter Complain Title" />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label"> Complain Description</label>
                    <textarea name='description' id="description" cols="30" rows="10" value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>

                    <button type='button' className='btn btn-primary' onClick={registerComplain}>Register Complain</button>
                </div>
            </form>
        </>
    )
}
