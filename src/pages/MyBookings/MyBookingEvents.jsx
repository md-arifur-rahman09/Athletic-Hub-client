import React, { useState } from 'react';
import Booking from './Booking';
import BookingCard from './BookingCard'; 

const MyBookingEvents = ({ bookings, setBookings }) => {
    const [isTable, setIsTable] = useState(true);

    return (
        <div className="p-5">
            <h1 className='text-4xl text-center font-bold my-5'>
                My Total Bookings : {bookings.length}
            </h1>

            {/*  Layout Toggle Button */}

            <div className="text-center mb-5">
                <button
                    onClick={() => setIsTable(!isTable)}
                    className="btn bg-blue-500 text-white hover:bg-yellow-400"
                >
                   {isTable ? 'Card' : 'Table'} View 🔁
                </button>
            </div>

            {/* Table View */}
            {isTable ? (
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Event Type</th>
                                <th>Event Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings?.map((book, index) => (
                                <Booking
                                    key={book._id}
                                    bookings={bookings}
                                    setBookings={setBookings}
                                    book={book}
                                    index={index}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                // Card View
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {bookings?.map((book, index) => (
                        <BookingCard
                            key={book._id}
                            bookings={bookings}
                            setBookings={setBookings}
                            book={book}
                            index={index}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyBookingEvents;
