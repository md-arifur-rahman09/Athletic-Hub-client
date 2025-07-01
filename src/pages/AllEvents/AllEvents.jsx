import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Event from './Event';
import { useTitle } from '../../hooks/usetitle';


const AllEvents = () => {
    const allEvents = useLoaderData();
    const [searchText, setSearchText] = useState("");

    useTitle('All Events');

    const filteredEvents = allEvents.filter(event =>
        event.eventName.toLowerCase().includes(searchText.toLowerCase()) ||
        event.location.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div>
            <h1 className='text-5xl font-semibold text-center my-5'>
                Total events: {filteredEvents.length}
            </h1>

            {/*  Search Input with Icon */}
            <div className="flex justify-center lg:justify-end mr-2 my-4">
                <div className="relative w-80">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                        🔍
                    </span>
                    <input
                        type="text"
                        placeholder="Search by event name or location..."
                        className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
            </div>

            {/*  Filtered Events Display */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 space-y-3 mx-10'>
                {
                    filteredEvents?.reverse().map(event => (
                        <Event key={event._id} event={event} />
                    ))
                }
            </div>
        </div>
    );
};

export default AllEvents;
