
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../authContext/AuthContext';
import MyBookingEvents from './MyBookingEvents';
import { bookingEventsPromise } from '../../api/bookingEventApi';
import { useTitle } from '../../hooks/usetitle';
import Loading from '../Loading/Loading';




const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const[loading,setLoading]= useState(true);
    useTitle('My Bookings');






    useEffect(() => {

        bookingEventsPromise(user.email)
            .then(data => {
                setBookings(data);
                setLoading(false)
            });

    }, [user?.email]);

    if(loading){
    return <Loading></Loading>
}



    return <MyBookingEvents bookings={bookings} setBookings={setBookings} />;
};

export default MyBookings;
