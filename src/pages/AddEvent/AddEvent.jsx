import React, { use } from 'react';
import { AuthContext } from '../../authContext/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useTitle } from '../../hooks/usetitle';

const AddEvent = () => {
  const { user } = use(AuthContext);
  useTitle('Add Event');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const eventInfo = Object.fromEntries(formData.entries());

    axios
      .post('https://athletic-hub-server-blue.vercel.app/allEvents', eventInfo)
      .then(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your event is successfully added',
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  };

  return (
    <div className="pt-12 max-w-4xl mx-auto px-4 sm:px-6 md:px-10 pb-16 bg-base-100 text-base-content rounded-2xl shadow-md border border-base-300 dark:border-base-content/20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-base-content">
        Add New Event
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Event Name */}
        <div>
          <label htmlFor="eventName" className="label label-text text-base-content/70">Event Name</label>
          <input id="eventName" name="eventName" type="text" placeholder="Event Name" className="input input-bordered w-full" required />
        </div>

        {/* Event Type */}
        <div>
          <label htmlFor="type" className="label label-text text-base-content/70">Event Type</label>
          <select id="type" name="type" defaultValue="Select one" className="select select-bordered w-full" required>
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

        {/* Location */}
        <div>
          <label htmlFor="location" className="label label-text text-base-content/70">Location</label>
          <input id="location" name="location" type="text" placeholder="Location" className="input input-bordered w-full" required />
        </div>

        {/* Image URL */}
        <div>
          <label htmlFor="image" className="label label-text text-base-content/70">Image URL</label>
          <input id="image" name="image" type="url" placeholder="Image URL" className="input input-bordered w-full" required />
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className="label label-text text-base-content/70">Date</label>
          <input id="date" name="date" type="date" className="input input-bordered w-full" required />
        </div>

        {/* Time */}
        <div>
          <label htmlFor="localTime" className="label label-text text-base-content/70">Local Time</label>
          <input id="localTime" name="localTime" type="time" className="input input-bordered w-full" required />
        </div>

        {/* Max Participants */}
        <div>
          <label htmlFor="participants" className="label label-text text-base-content/70">Max Participants</label>
          <input id="participants" name="participants" type="number" placeholder="Maximum" className="input input-bordered w-full" required />
        </div>

        {/* Entry Fee & Currency */}
        <div className="flex gap-3">
          <div className="flex-1">
            <label htmlFor="entryFee" className="label label-text text-base-content/70">Entry Fee</label>
            <input id="entryFee" name="entryFee" type="number" placeholder="Entry Fee" className="input input-bordered w-full" required />
          </div>
          <div className="flex-1">
            <label htmlFor="currency" className="label label-text text-base-content/70">Currency</label>
            <select id="currency" name="currency" defaultValue="pick one" className="select select-bordered w-full" required>
              <option disabled>pick one</option>
              <option>USD</option>
              <option>EURO</option>
              <option>BDT</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label htmlFor="description" className="label label-text text-base-content/70">Description</label>
          <textarea id="description" name="description" className="textarea textarea-bordered w-full h-28 resize-none" placeholder="Write event description..." required />
        </div>

        {/* Creator Name */}
        <div>
          <label htmlFor="hr_name" className="label label-text text-base-content/70">Creator Name</label>
          <input id="hr_name" name="hr_name" type="text" className="input input-bordered w-full" defaultValue={user?.displayName} readOnly />
        </div>

        {/* Creator Email */}
        <div>
          <label htmlFor="hr_email" className="label label-text text-base-content/70">Creator Email</label>
          <input id="hr_email" name="hr_email" type="email" className="input input-bordered w-full" defaultValue={user?.email} readOnly />
        </div>

        {/* Submit */}
        <div className="md:col-span-2">
          <button type="submit" className="btn btn-primary w-full text-lg">
            Add Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
