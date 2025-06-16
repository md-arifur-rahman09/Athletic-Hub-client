
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../authContext/AuthContext';
import MyBookingEvents from './MyBookingEvents';
import { bookingEventsPromise } from '../../api/bookingEventApi';
import UseTitle from '../../hooks/UseTitle';



const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    UseTitle('My Bookings')




    useEffect(() => {

        bookingEventsPromise(user.email)
            .then(data => {
                setBookings(data);



            });

    }, [user?.email]);



    return <MyBookingEvents bookings={bookings} setBookings={setBookings} />;
};

export default MyBookings;
