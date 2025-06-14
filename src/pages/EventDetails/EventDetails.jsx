import React from 'react';
import { Link, useLoaderData } from 'react-router';


const EventDetails = () => {
    const eventDetails = useLoaderData();
    // console.log(eventDetails);
    const {
        image, eventName, type, description, location, date, localTime, participants, entryFee, currency, _id } = eventDetails;

        

   


    return (
        <div>
            <h1 className='text-3xl font-semibold p-5'> Details of : {eventName}</h1>
            <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden md:max-w-2xl my-10 transition transform hover:scale-105 hover:shadow-xl duration-300">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img className=" w-full object-cover md:w-72" src={image} alt={eventName} />
                    </div>
                    <div className="p-6 flex flex-col justify-between">
                        <div>
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{type}</div>
                            <h2 className="block mt-1 text-xl leading-tight font-bold text-gray-900">{eventName}</h2>
                            <p className="mt-2 text-gray-600 text-sm">{description}</p>

                            <div className="mt-4 space-y-1 text-sm text-gray-700">
                                <p><span className="font-semibold">📍 Location:</span> {location}</p>
                                <p><span className="font-semibold">📅 Date:</span> {date}</p>
                                <p><span className="font-semibold">⏰ Time:</span> {localTime}</p>
                                <p><span className="font-semibold">👥 Participants:</span> {participants}</p>
                                <p><span className="font-semibold">💵 Entry Fee:</span> {entryFee} {currency}</p>
                            </div>
                        </div>

                        {/*  Details Button */}
                        <div className="mt-6">
                            <Link
                                to={`/bookingForm/${_id}`}
                                className="inline-block bg-indigo-500 text-white px-5 py-2 rounded-xl hover:bg-indigo-600 transition"
                            >
                                Book now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;