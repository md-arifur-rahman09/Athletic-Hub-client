import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../authContext/AuthContext';
import UseTitle from '../../hooks/UseTitle';

const MyPostedEvents = () => {
    const [events, setEvents] = useState([]);
    const { user } = use(AuthContext);
    UseTitle('My Posted Events')


    useEffect(() => {
        fetch(`https://athletic-hub-server-blue.vercel.app/events?email=${user.email}`, {
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => setEvents(data));
    }, [user?.email]);


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://athletic-hub-server-blue.vercel.app/events/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your event has been deleted.",
                                icon: "success"
                            });


                            const remaining = events?.filter(event => event._id !== id);
                            setEvents(remaining);
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    }
                    );
            }
        });
    };

    return (
        <div className="overflow-x-auto">
            <h1 className='text-4xl text-center font-bold my-10'>My Total Posted Events : {events.length}</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Event</th>

                        <th>Type</th>
                        <th>Description</th>
                        <th>HR</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        events?.map((event, index) => (
                            <tr key={event._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={event.image} alt="event" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                {event.eventName}
                                            </div>
                                            <div className="text-sm opacity-50">{event.location}</div>
                                        </div>
                                    </div>
                                </td>

                                <td>{event.type}</td>
                                <td>{event.description}</td>
                                <td>
                                    <span className='font-bold'>  {event.hr_email}</span>
                                    <br />
                                    {event.hr_name}

                                </td>
                                <td>

                                    <Link to={`/details/${event._id}`} className='btn btn-xs btn-success text-white mb-1'> details</Link>
                                    <br />

                                    <Link to={`/update/${event._id}`}>
                                        <button className="btn btn-info btn-xs mb-1 text-white  ">Update</button>
                                    </Link>
                                    <br />
                                    <button onClick={() => handleDelete(event._id)} className="btn btn-error btn-xs text-white ">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyPostedEvents;
