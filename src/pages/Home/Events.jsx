import React, { use } from 'react';
import Event from '../AllEvents/Event';



const Events = ({ eventsPromise }) => {
    const events = use(eventsPromise);
    return (
       <div>
        <h2 className='text-6xl font-bold text-center my-10 '>Current Events </h2>
         <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 mx-10'>
            {
                events.slice(-6).map(event => <Event key={event._id} event={event}></Event>)
            }
        </div>
       </div>
    );
};

export default Events;