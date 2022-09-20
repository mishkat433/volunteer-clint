import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import "./Task.css"

const Task = ({ task }) => {
    const [loginUser, setLoginUser] = useContext(UserContext)
    const registerHandle = () => {
        const card = { ...loginUser }
        card.selectWork = task.name;
        setLoginUser(card)
    }


    return (
        <div className="col-lg-3">
            <Link to="/register"><div className=" card mb-4 cli" onClick={registerHandle}>
                <img className="card-img-top img" src={task.pic} alt="task" />
                <div className="card-body bg-danger titl">
                    <h5 className="card-title text-white text-center">{task.name}</h5>
                </div>
            </div></Link>
        </div>
    );
};

export default Task;