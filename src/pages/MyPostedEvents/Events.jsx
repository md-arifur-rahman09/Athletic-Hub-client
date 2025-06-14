import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const Events = ({ email }) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/events?email=${email}`)
            .then(res => res.json())
            .then(data => setEvents(data));
    }, [email]);

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
                axios.delete(`http://localhost:3000/events/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your event has been deleted.",
                                icon: "success"
                            });

                            
                            const remaining = events.filter(event => event._id !== id);
                            setEvents(remaining);
                        }
                    })
                    .catch(error => console.log(error));
            }
        });
    };

    return (
        <div className="overflow-x-auto">
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
                        events.map((event, index) => (
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
                                <td>{event.hr_name}
                                    <br />
                                  <span className='font-bold'>  {event.hr_email}</span>
                                </td>
                                <td>
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

export default Events;
