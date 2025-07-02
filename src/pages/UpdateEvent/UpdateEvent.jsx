import axios from 'axios';
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { useTitle } from '../../hooks/usetitle';

const UpdateEvent = () => {
    useTitle('Update Event');
    const event = useLoaderData();
    const navigate=useNavigate();

    const {
        _id,
        eventName,
        type,
        date,
        localTime,
        location,
        image,
        participants,
        entryFee,
        currency,
        description,
    } = event;

    const handleSubmit = (e, id) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedEvent = Object.fromEntries(formData.entries());

        axios
            .put(`https://athletic-hub-server-blue.vercel.app/events/${id}`, updatedEvent)
            .then((res) => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your event has been successfully updated',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch(() => {
                // Error handled silently
            });
    };

    return (
        <div className="pt-12 max-w-4xl mx-auto px-4 sm:px-6 md:px-10 pb-16 bg-base-100 text-base-content shadow-md rounded-2xl border border-base-300 dark:border-base-content/20">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="btn btn-xs btn-primary mb-6 hover:bg-blue-300"
            >
                ⬅ Back
            </button>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-base-content">
                Update Event
            </h1>

            <form onSubmit={(e) => handleSubmit(e, _id)} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Event Name */}
                <div>
                    <label className="label">
                        <span className="label-text text-base-content/70">Event Name</span>
                    </label>
                    <input
                        type="text"
                        name="eventName"
                        defaultValue={eventName}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Event Type */}
                <div>
                    <label className="label">
                        <span className="label-text text-base-content/70">Event Type</span>
                    </label>
                    <select
                        name="type"
                        defaultValue={type}
                        className="select select-bordered w-full"
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
                    <label className="label">
                        <span className="label-text text-base-content/70">Date</span>
                    </label>
                    <input
                        type="date"
                        name="date"
                        defaultValue={date}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Time */}
                <div>
                    <label className="label">
                        <span className="label-text text-base-content/70">Local Time</span>
                    </label>
                    <input
                        type="time"
                        name="localTime"
                        defaultValue={localTime}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="label">
                        <span className="label-text text-base-content/70">Location</span>
                    </label>
                    <input
                        type="text"
                        name="location"
                        defaultValue={location}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Image URL */}
                <div>
                    <label className="label">
                        <span className="label-text text-base-content/70">Image URL</span>
                    </label>
                    <input
                        type="url"
                        name="image"
                        defaultValue={image}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Participants */}
                <div>
                    <label className="label">
                        <span className="label-text text-base-content/70">Max Participants</span>
                    </label>
                    <input
                        type="number"
                        name="participants"
                        defaultValue={participants}
                        min="1"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Entry Fee & Currency */}
                <div className="flex gap-3">
                    <div className="flex-1">
                        <label className="label">
                            <span className="label-text text-base-content/70">Entry Fee</span>
                        </label>
                        <input
                            type="number"
                            name="entryFee"
                            defaultValue={entryFee}
                            min="0"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="flex-1">
                        <label className="label">
                            <span className="label-text text-base-content/70">Currency</span>
                        </label>
                        <select
                            name="currency"
                            defaultValue={currency}
                            className="select select-bordered w-full"
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
                    <label className="label">
                        <span className="label-text text-base-content/70">Description</span>
                    </label>
                    <textarea
                        name="description"
                        defaultValue={description}
                        className="textarea textarea-bordered w-full h-28 resize-none"
                        required
                    />
                </div>

                {/* Submit */}
                <div className="lg:col-span-2">
                    <button type="submit" className="btn btn-primary w-full text-lg mt-4">
                        Update Event
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateEvent;
