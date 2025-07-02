import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { FaSearch } from 'react-icons/fa';
import Event from './Event';
import { useTitle } from '../../hooks/usetitle';

const AllEvents = () => {
    const allEvents = useLoaderData();
    const [searchText, setSearchText] = useState('');
    const [sortOption, setSortOption] = useState('latest');
    const [searchTrigger, setSearchTrigger] = useState(0);

    useTitle('All Events');

    // Filter events by search
    const filteredEvents = allEvents.filter(event =>
        event.eventName.toLowerCase().includes(searchText.toLowerCase()) ||
        event.location.toLowerCase().includes(searchText.toLowerCase())
    );

    // Sort events based on selected option
    const sortedEvents = [...filteredEvents].sort((a, b) => {
        if (sortOption === 'asc') {
            return a.eventName.localeCompare(b.eventName);
        } else if (sortOption === 'desc') {
            return b.eventName.localeCompare(a.eventName);
        } else if (sortOption === 'low') {
            return parseFloat(a.entryFee) - parseFloat(b.entryFee);
        } else if (sortOption === 'high') {
            return parseFloat(b.entryFee) - parseFloat(a.entryFee);
        } else {
            return 0;
        }
    });

    return (
        <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pb-16 text-base-content">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">
                    Total Events: {sortedEvents.length}
                </h1>

                {/* Search + Sort */}
                <div className="flex flex-col sm:flex-row items-center gap-3">
                    {/* Search box */}
                    <div className="relative w-44">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="input input-bordered w-full pl-9 pr-3"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={() => setSearchTrigger(prev => prev + 1)}
                            className="absolute inset-y-0 left-0 pl-3 flex items-center text-base-content/60 hover:text-primary z-30"
                            title="Search"
                        >
                            <FaSearch className="text-sm" />
                        </button>
                    </div>

                    {/* Sort dropdown */}
                    <select
                        className="select select-bordered w-full sm:w-48 text-sm"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="latest">Sort by: Latest</option>
                        <option value="asc">Name: A → Z</option>
                        <option value="desc">Name: Z → A</option>
                        <option value="low">Price: Low → High</option>
                        <option value="high">Price: High → Low</option>
                    </select>
                </div>
            </div>

            {/* Event grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sortedEvents.map(event => (
                    <Event key={event._id} event={event} />
                ))}
            </div>
        </div>
    );
};

export default AllEvents;
