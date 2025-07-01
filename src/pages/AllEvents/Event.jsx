import React from 'react';
import { Link, useNavigate } from 'react-router';

const Event = ({ event }) => {
    const navigate = useNavigate();
    const {
        image,
        eventName,
        type,
        description,
        location,
        date,
        localTime,
        _id,
    } = event;

    const handleCard = () => {
        navigate(`/event/${_id}`)
    }

    return (
        <div onClick={handleCard} className="bg-base-100 text-base-content rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:bg-gray-100 transition duration-300 transform hover:scale-[1.02]">
            <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="md:w-2/5">
                    <img
                        className="h-64 w-full object-cover md:h-full"
                        src={image}
                        alt={eventName}
                    />
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col md:w-3/5 h-full">
                    <div>
                        <span className="uppercase text-sm font-semibold text-primary tracking-wide">
                            {type}
                        </span>
                        <h2 className="mt-1 text-xl font-bold leading-tight text-base-content">
                            {eventName}
                        </h2>
                        <p className="mt-2 text-sm text-base-content/70">{description}</p>

                        <div className="mt-4 text-sm space-y-1">
                            <p>
                                <span className="font-medium">📍 Location:</span> {location}
                            </p>
                            <p>
                                <span className="font-medium">📅 Date:</span> {date}
                            </p>
                            <p>
                                <span className="font-medium">⏰ Time:</span> {localTime}
                            </p>
                        </div>
                    </div>

                    {/* Button fixed to bottom */}
                    <div className="mt-auto pt-6">
                        <Link
                            to={`/event/${_id}`}
                            className="btn btn-sm md:btn-md bg-primary text-white hover:bg-primary-focus"
                        >
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;
