import React, { useEffect, useState } from 'react';
import EventsCard from './EventsCard';

const Events = () => {
    const [events, setEvents] = useState([])
   useEffect(()=>{
       fetch('https://afternoon-oasis-46092.herokuapp.com/eventLoad')
           .then(res => res.json())
           .then(data => setEvents(data))
   },[])
    return (
        <div className="row">
            {
                events.map(data => <EventsCard task={data} key={data._id}></EventsCard>)
            }
        </div>
    );
};

export default Events;