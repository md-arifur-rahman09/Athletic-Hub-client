import React from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

const BookingCard = ({ book, bookings, setBookings }) => {
    const { name, phone, email, _id, type, eventName, image } = book;

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
                        const remaining = bookings?.filter(b => b._id !== id);
                        setBookings(remaining);
                    })
                    .catch(err => console.error(err));
            }
        });
    };

    return (
        <div className="bg-base-100 text-base-content border border-base-300 dark:border-base-content/10 rounded-xl shadow-sm p-4 hover:shadow-md transition duration-300">
            <img src={image} alt={eventName} className="rounded-lg h-40 w-full object-cover mb-4" />
            <h2 className="text-xl font-semibold mb-2">{eventName}</h2>
            <div className="text-sm space-y-1 text-base-content/80">
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Type:</strong> {type}</p>
            </div>
            <button
                onClick={() => handleCancel(_id)}
                className="btn btn-error btn-sm w-full mt-4"
            >
                Cancel Booking
            </button>
        </div>
    );
};

export default BookingCard;
