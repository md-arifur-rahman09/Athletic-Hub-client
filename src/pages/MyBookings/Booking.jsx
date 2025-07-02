import axios from 'axios';
import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const Booking = ({ index, book, bookings, setBookings }) => {
    const { name, phone, email, _id, image, type, eventName } = book;

    const handleCancel = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://athletic-hub-server-blue.vercel.app/bookings/${id}`)
                    .then(() => {
                        Swal.fire('Deleted!', 'Your booking has been deleted.', 'success');
                        const remainingEvents = bookings?.filter(b => b._id !== id);
                        setBookings(remainingEvents);
                    })
                    .catch(() => { });
            }
        });
    };

    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Event" />
                        </div>
                    </div>
                    <div>
                        <div className="font-medium">{name}</div>
                        <div className="text-sm text-base-content/60">{email}</div>
                    </div>
                </div>
            </td>
            <td>{phone}</td>
            <td>{type}</td>
            <td>{eventName}</td>
            <td>
                <Link onClick={() => handleCancel(_id)}>
                    <button className="btn btn-xs btn-error text-white">Cancel</button>
                </Link>
            </td>
        </tr>
    );
};

export default Booking;
