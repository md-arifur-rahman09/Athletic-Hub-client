import React, { useState } from 'react';
import Booking from './Booking';
import BookingCard from './BookingCard';

const MyBookingEvents = ({ bookings, setBookings }) => {
  const [isTable, setIsTable] = useState(true);

  return (
    <div className="pt-12 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pb-10 text-base-content">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-base-content">
        My Total Bookings: {bookings.length}
      </h1>

      <div className="text-center mb-8">
        <button
          onClick={() => setIsTable(!isTable)}
          className="btn btn-primary hover:bg-blue-400 px-6 text-base"
        >
          {isTable ? 'Card' : 'Table'} View 🔁
        </button>
      </div>

      {isTable ? (
        <div className="overflow-x-auto">
          <table className="table bg-base-100 border border-base-300 dark:border-base-content/20 rounded-xl shadow-sm">
            <thead className="bg-base-200">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
