import React, { use } from 'react';
import Event from '../AllEvents/Event';

const Events = ({ eventsPromise }) => {
    const events = use(eventsPromise);

    return (
        <div className="py-12 px-4 sm:px-8 md:px-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-base-content">
                Latest Events
            </h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                {events
                    ?.slice(-8)
                    .reverse()
                    .map((event) => (
                        <Event key={event._id} event={event} />
                    ))}
            </div>
        </div>
    );
};

export default Events;
