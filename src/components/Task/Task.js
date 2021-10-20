import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import "./Task.css"

const Task = ({ task}) => {
    const [loginUser, setLoginUser] = useContext(UserContext)
    const registerHandle =()=>{
        const card= {...loginUser}
        card.selectWork=task.name;
        setLoginUser(card)
    }


    return (
        <div className="col-lg-3">
            <Link to="/register"><div class=" card mb-4 cli" onClick={registerHandle}>
                <img class="card-img-top img" src={task.pic} alt="Card image cap" />
                <div class="card-body bg-danger titl">
                    <h5 class="card-title text-white text-center">{task.name}</h5>
                </div>
            </div></Link>
        </div>
    );
};

export default Task;