import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import "./EventsCard.css"

const EventsCard = ({task}) => {
    const [loginUser, setLoginUser] = useContext(UserContext)
    const registerHandle = () => {
        const card = { ...loginUser }
        card.selectWork = task.title;
        setLoginUser(card)
    }
    
    return (
        <div className="col-lg-3">
            <Link to="/register"><div class=" card mb-4 cli" onClick={registerHandle}>
                <img class="card-img-top img" src="" alt="Card image cap" />
                <div class="card-body bg-danger tit">
                    <h5 class="card-title text-white text-center">{task.title}</h5>
                </div>
            </div></Link>
        </div>
    );
};

export default EventsCard;