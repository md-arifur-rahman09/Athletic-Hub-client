import React, { use } from 'react';
import { AuthContext } from '../../authContext/AuthContext';
import { useParams } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';




const BookingForm = () => {
    const { user } = use(AuthContext);
    const { id } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const bookingData = Object.fromEntries(formData.entries());
        const eventBookingData = { eventId: id, ...bookingData }


        axios.post('http://localhost:3000/bookings', eventBookingData)
            .then(res => {
                console.log(res.data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You are successfully booked this event",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => console.log(error))
    }



    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center">Book for: {id}  </h2>
            <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                    <label className="label">  Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder=" Name"
                        defaultValue={user.displayName}


                        className="w-full border mt-2 px-4 py-2 rounded-lg"
                        required
                    />
                </div>


                <div>
                    <label className="label">  Personal Details</label>
                    <input
                        type="text"
                        name="details"
                        placeholder="Personal Details"



                        className="w-full border mt-2 px-4 py-2 rounded-lg"
                        required
                    />
                </div>


                <div>
                    <label className="label"> Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"

                        className="w-full border mt-2 px-4 py-2 rounded-lg"
                        required
                    />
                </div>


                <div>
                    <label className="label"> Email </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        defaultValue={user.email}


                        className="w-full border mt-2 px-4 py-2 rounded-lg"
                        required
                    />
                </div>





                <div>
                    <label className="label"> Note</label>
                    <textarea
                        name="note"
                        placeholder="Any additional notes (optional)"

                        className="w-full border mt-2 px-4 py-2 rounded-lg"
                    />
                </div>


                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        name="terms"
                        required

                    />
                    <span>I accept the terms and conditions</span>
                </label>



                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
                >
                    Confirm Booking
                </button>
            </form>
        </div>
    );
};

export default BookingForm;
