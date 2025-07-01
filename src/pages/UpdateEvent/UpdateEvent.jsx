import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { useTitle } from '../../hooks/usetitle';


const UpdateEvent = () => {
    useTitle ('Update Event');
    const event = useLoaderData();

    const { _id, eventName, type, date, localTime, location, image, participants, entryFee, currency, description } = event;

    const handleSubmit = (e, id) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedEvent = Object.fromEntries(formData.entries());

        axios.put(`https://athletic-hub-server-blue.vercel.app/events/${id}`, updatedEvent)
            .then(res => {
                // console.log(res.data);
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "You event has successfully updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }


            })
            .catch(() => {
                //  console.log(error);
            })
    }

    return (
        <div className="card bg-base-100 max-w-3xl shadow-2xl mx-auto mt-10">
            <div className="card-body">
                <h1 className="text-5xl font-bold text-center mb-6">Update Event</h1>

                <form onSubmit={e => handleSubmit(e, _id)} className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                    {/* Event Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Event Name</label>
                        <input
                            type="text"
                            name="eventName"
                            className="input input-bordered w-full"
                            defaultValue={eventName}
                            required
                        />
                    </div>

                    {/* Event Type */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                        <select
                            name="type"
                            className="select select-bordered w-full"
                            defaultValue={type}
                            required
                        >
                            <option disabled>Select one</option>
                            <option>Swimming</option>
                            <option>Long Jump</option>
                            <option>High Jump</option>
                            <option>Shooting</option>
                            <option>Archery</option>
                            <option>Football</option>
                            <option>Hockey</option>
                        </select>
                    </div>

                    {/* Date */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                        <input
                            type="date"
                            name="date"
                            className="input input-bordered w-full"
                            defaultValue={date}
                            required
                        />
                    </div>

                    {/* Time */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Local Time</label>
                        <input
                            type="time"
                            name="localTime"
                            className="input input-bordered w-full"
                            defaultValue={localTime}
                            required
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                        <input
                            type="text"
                            name="location"
                            className="input input-bordered w-full"
                            defaultValue={location}
                            required
                        />
                    </div>

                    {/* Image */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                        <input
                            type="url"
                            name="image"
                            className="input input-bordered w-full"
                            defaultValue={image}
                            required
                        />
                    </div>

                    {/* Participants */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Max Participants</label>
                        <input
                            type="number"
                            name="participants"
                            className="input input-bordered w-full"
                            defaultValue={participants}
                            min="1"
                            required
                        />
                    </div>

                    {/* Entry Fee & Currency */}
                    <div className="flex gap-2">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Entry Fee</label>
                            <input
                                type="number"
                                name="entryFee"
                                className="input input-bordered w-full"
                                defaultValue={entryFee}
                                min="0"
                                required
                            />
                        </div>

                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
                            <select
                                name="currency"
                                className="select select-bordered w-full"
                                defaultValue={currency}
                                required
                            >
                                <option disabled>pick one</option>
                                <option>USD</option>
                                <option>EURO</option>
                                <option>BDT</option>
                            </select>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="lg:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            name="description"
                            className="textarea textarea-bordered w-full h-28 resize-none"
                            defaultValue={description}
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="lg:col-span-2">
                        <input
                            type="submit"
                            value="Update Event"
                            className="btn btn-neutral w-full text-lg mt-4"
                        />
                    </div>

                </form>
            </div>
        </div>


    );
};

export default UpdateEvent;