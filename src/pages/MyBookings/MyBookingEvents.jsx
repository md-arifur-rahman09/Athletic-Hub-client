import React from 'react';
import Booking from './Booking';

const MyBookingEvents = ({ bookings }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Event Type</th>
                        <th>Event Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((book,index) => (
                            <Booking key={book._id} book={book} index={index} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyBookingEvents;
