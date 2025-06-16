import React from 'react';
import Booking from './Booking';


const MyBookingEvents = ({ bookings, setBookings }) => {
 
    return (
        <div className="overflow-x-auto">
            <h1 className='text-4xl text-center font-bold my-10'>My Total Bookings : {bookings.length}</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Event Type</th>
                        <th>Event Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings?.map((book, index) => (
                            <Booking
                                key={book._id}
                               
                                bookings={bookings}
                                setBookings={setBookings}
                                book={book}
                                index={index} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyBookingEvents;
