import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../authContext/AuthContext';
import { useTitle } from '../../hooks/usetitle';
import { FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa';

const MyPostedEvents = () => {
  const [events, setEvents] = useState([]);
  const { user } = use(AuthContext);
  useTitle('My Posted Events');

  useEffect(() => {
    fetch(`https://athletic-hub-server-blue.vercel.app/events?email=${user.email}`, {
      credentials: 'include'
    })
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2563eb',
      cancelButtonColor: '#dc2626',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://athletic-hub-server-blue.vercel.app/events/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire('Deleted!', 'Your event has been deleted.', 'success');
            const remaining = events?.filter((event) => event._id !== id);
            setEvents(remaining);
          }
        });
      }
    });
  };

  return (
    <div className="pt-12 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pb-16 text-base-content">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-base-content">
        My Total Posted Events: {events.length}
      </h1>

      <div className="overflow-x-auto rounded-xl border border-base-300 dark:border-base-content/10 bg-base-100 shadow-sm">
        <table className="table text-sm md:text-base">
          <thead className="bg-base-200 text-base-content">
            <tr>
              <th>#</th>
              <th>Event</th>
              <th>Type</th>
              <th>Description</th>
              <th>HR</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events?.map((event, index) => (
              <tr key={event._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={event.image} alt="event" />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">{event.eventName}</div>
                      <div className="text-sm text-base-content/60">{event.location}</div>
                    </div>
                  </div>
                </td>
                <td>{event.type}</td>
                <td className="max-w-xs text-base-content/80">{event.description}</td>
                <td>
                  <span className="font-semibold">{event.hr_email}</span>
                  <br />
                  <span className="text-base-content/70">{event.hr_name}</span>
                </td>
                <td>
                  <div className="flex justify-center gap-3">
                    <Link to={`/details/${event._id}`} title="Details">
                      <button className="btn btn-sm btn-ghost text-info hover:bg-info/10">
                        <FaEye className="text-lg" />
                      </button>
                    </Link>
                    <Link to={`/update/${event._id}`} title="Update">
                      <button className="btn btn-sm btn-ghost text-primary hover:bg-primary/10">
                        <FaEdit className="text-lg" />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(event._id)}
                      title="Delete"
                      className="btn btn-sm btn-ghost text-error hover:bg-error/10"
                    >
                      <FaTrashAlt className="text-lg" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedEvents;
