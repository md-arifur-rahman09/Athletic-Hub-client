import axios from 'axios';
import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const Booking = ({ index, book, bookings, setBookings }) => {

    // console.log(book)
    const { name, phone, email, _id } = book;



  
   
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
                    .then(res => {
                        // console.log(res.data);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });

                        const remainingEvents =  bookings?.filter(b => b._id !== id);
                        setBookings(remainingEvents)

                    })
                    .catch(error => console.log(error))




            }
        });
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img src={book.image} alt="Event" />

                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>{phone}</td>
            <td>{book.type}</td>
            <td>{book.eventName}</td>
            <th>
                <Link onClick={() => handleCancel(_id)}>
                    <button className="btn btn-error  btn-xs text-white">Cancel </button>
                </Link>
            </th>
        </tr>
    );
};

export default Booking;
