import React from 'react';
import { Link, useNavigate } from 'react-router';

const Event = ({ event }) => {
    const navigate = useNavigate();
    const {
        image,
        entryFee,
        currency,
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
        <div
            onClick={handleCard}
            className="bg-base-100 text-base-content border border-base-300 dark:border-base-content/20 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 transform hover:scale-[1.02] cursor-pointer "
        >

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
                            <p>
                                <span className="font-medium">💵 Entry Fee: </span> {entryFee} {currency}
                            </p>
                        </div>
                    </div>

                    {/* Button fixed to bottom */}
                    <div className="mt-auto pt-6">
                        <Link
                            to={`/event/${_id}`}
                            className="btn btn-sm md:btn-md bg-primary text-white hover:bg-primary-focus w-full"
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
