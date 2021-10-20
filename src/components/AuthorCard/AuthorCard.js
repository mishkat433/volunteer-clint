import React, { useState } from 'react';


const AuthorCard = ({ parcesHistory}) => {

    const [delet, setDelet]= useState(true)
    const deleteHandle = (id) => {
        fetch(`https://afternoon-oasis-46092.herokuapp.com/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    setDelet(false)
                    
                }
            })
    }
   

    return (
        <div className="container">
            <div className="card-align">
                <div className="card mt-4">
                    {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                    <div className="card-body">
                        <h3 className="card-title">{parcesHistory.work}</h3>
                        <p className="card-title">{parcesHistory.description}</p>
                        <b>Date: {parcesHistory.date}</b>
                    </div>
                    {
                        delet ? <button onClick={() => deleteHandle(parcesHistory._id)} className="btn btn-danger">Cancel</button> : <button onClick={() => deleteHandle(parcesHistory._id)} className="btn btn-success">Cancel done</button>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default AuthorCard;