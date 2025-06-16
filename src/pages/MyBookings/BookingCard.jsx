import React from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

const BookingCard = ({ book, bookings, setBookings }) => {
    const { name, phone, email, _id, type, eventName, image } = book;

    const handleCancel = (id) => {
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
                axios.delete(`https://athletic-hub-server-blue.vercel.app/bookings/${id}`)
                    .then(() => {
                        Swal.fire("Deleted!", "Your booking has been deleted.", "success");
                        const remaining = bookings.filter(b => b._id !== id);
                        setBookings(remaining);
                    })
                    .catch(err => console.error(err));
            }
        });
    };

    return (
        <div className="card bg-base-100 shadow-md p-4">
            <img src={image} alt={eventName} className="rounded-md h-40 w-full object-cover" />
            <div className="mt-3">
                <h2 className="font-bold text-lg">{eventName}</h2>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Type:</strong> {type}</p>
                <button
                    onClick={() => handleCancel(_id)}
                    className="btn btn-error btn-sm text-white mt-2"
                >
                    Cancel Booking
                </button>
            </div>
        </div>
    );
};

export default BookingCard;
