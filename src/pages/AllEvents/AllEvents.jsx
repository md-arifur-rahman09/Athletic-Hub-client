import React from 'react';
import { useLoaderData } from 'react-router';
import Event from './Event';

const AllEvents = () => {
    const allEvents= useLoaderData();
    console.log(allEvents)
    return (
        <div>
         <h1 className='text-5xl  font-semibold text-center my-5'>Total events : {allEvents.length}</h1>
         <div className='grid grid-cols-1  lg:grid-cols-2 gap-7 space-y-3 mx-10'>
            {
                allEvents.map (event=> <Event key={event._id} event= {event}></Event>)
            }
         </div>
        </div>
    );
};

export default AllEvents;