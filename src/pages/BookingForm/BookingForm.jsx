import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../authContext/AuthContext';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';





const BookingForm = () => {
    const [datas, setDatas] = useState([]);

    // const [loading, setLoading] = useState(true)
    const { user } = use(AuthContext);
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        fetch('http://localhost:3000/allEvents')
            .then(res => res.json())
            .then(data => {
                setDatas(data);
                // setLoading(false);
            }

            )
    }, []);








    //   if (loading) {
    //     return <Loading></Loading>
    // }



    const remainingData = datas.find(d => d._id === id);
    // console.log(remainingData);

    const handleBack = () => {
        navigate(-1)
    };



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

                // e.target.reset();

            })
            .catch(error => console.log(error))
    }



    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl mt-10">
            <button onClick={handleBack} className='btn btn-xs hover:bg-blue-400 sm:text-2xl lg:text-xs' > ⬅ <span className='hidden lg:block'>Go Back</span></button>
            <h2 className="text-2xl font-bold mb-6 text-center  ">Book for : <span className='text-cyan-800 '>{remainingData?.type} ({remainingData?.eventName})</span> </h2>
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
