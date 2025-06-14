
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../authContext/AuthContext';
import MyBookingEvents from './MyBookingEvents';
import { bookingEventsFetcher } from '../../api/bookingEventApi';

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            bookingEventsFetcher(user.email)
                .then(data => {
                    setBookings(data);
                    setLoading(false);
                });
        }
    }, [user?.email]);

    if (loading) return <div className="text-center my-10">Loading bookings...</div>;

    return <MyBookingEvents bookings={bookings} />;
};

export default MyBookings;
