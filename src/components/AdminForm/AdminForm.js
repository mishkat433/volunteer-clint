import React, { useState } from 'react';
import './AdminFrom.css'

const AdminForm = () => {

    const [event, setEvent]= useState({})
    const submitHandle=(e)=>{
        fetch('https://afternoon-oasis-46092.herokuapp.com/uploadEvent',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(event)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result){
                alert("Event add successfully")
            }
        })

        e.preventDefault()
    }

    const changeHandle=(even)=>{
        const newEven= {...event}
        newEven[even.target.name]= even.target.value
        setEvent(newEven)
    }
    return (
        <div>
            <div className="full-form">
                <form action="" onSubmit={submitHandle} className="form-inline d-flex">
                    <div className="lefts">
                        <div className="form-group mb-2">
                            <label htmlFor="title">Event Title</label>
                            <input onBlur={changeHandle} name="title" className="form-control inp" required type="text" />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="description">Description</label>
                            <textarea onBlur={changeHandle} name="description" className="form-control des inp" type="text" />
                        </div>
                    </div>
                    <div className="right">
                        <div className="form-group mb-2">
                            <label htmlFor="date">Event Date</label>
                            <input onBlur={changeHandle} name="date" className="form-control inp" required type="date" />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="image">Banner</label>
                            <input onBlur={changeHandle} readOnly name="image" className="form-control " type="file" />
                        </div>
                        <button  className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminForm;