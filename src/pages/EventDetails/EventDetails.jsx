import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import { useTitle } from '../../hooks/usetitle';

const EventDetails = () => {
    const eventDetails = useLoaderData();
    const navigate = useNavigate();
    useTitle('Event Details');

    const {
        image,
        eventName,
        type,
        description,
        location,
        date,
        localTime,
        participants,
        entryFee,
        currency,
        _id,
    } = eventDetails;

    return (
        <div className="px-4 sm:px-6 md:px-12 py-8 max-w-7xl mx-auto">
            {/* Back Button */}
            <div className="flex justify-start mb-4  mt-10">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="btn btn-xs  btn-primary mb-6 hover:bg-blue-300"
                >
                    ⬅ Back
                </button>
            </div>


            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-base-content mb-8">
                Details of: <span className="text-primary">{type} ({eventName})</span>
            </h1>

            {/* Card */}
            <div className="bg-base-100 text-base-content rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-[1.02] overflow-hidden flex flex-col lg:flex-row">
                {/* Image */}
                <div className="w-full lg:w-2/5">
                    <img
                        src={image}
                        alt={eventName}
                        className="w-full h-64 md:h-full object-cover"
                    />
                </div>

                {/* Details */}
                <div className="w-full lg:w-3/5 p-6 flex flex-col justify-between">
                    <div>
                        <p className="uppercase text-sm text-base-content font-semibold">{type}</p>
                        <h2 className="text-2xl font-bold mt-1">{eventName}</h2>
                        <p className="text-sm mt-2 text-base-content/70">{description}</p>

                        <div className="mt-4 text-sm space-y-1">
                            <p><span className="font-medium">📍 Location:</span> {location}</p>
                            <p><span className="font-medium">📅 Date:</span> {date}</p>
                            <p><span className="font-medium">⏰ Time:</span> {localTime}</p>
                            <p><span className="font-medium">👥 Participants:</span> {participants}</p>
                            <p><span className="font-medium">💵 Entry Fee:</span> {entryFee} {currency}</p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <Link
                            to={`/bookingForm/${_id}`}
                            className="btn btn-primary text-white"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
