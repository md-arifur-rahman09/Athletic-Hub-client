import React, { use } from 'react';
import { AuthContext } from '../../authContext/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import UseTitle from '../../hooks/UseTitle';



const AddEvent = () => {

    const { user } = use(AuthContext);
    UseTitle('Add Event')




    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const eventInfo = Object.fromEntries(formData.entries());

        // console.log(eventInfo);
        axios.post('https://athletic-hub-server-blue.vercel.app/allEvents', eventInfo)
            .then(()=> {
                // console.log(res.data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your event is succesfully added",
                    showConfirmButton: false,
                    timer: 1500
                });

                form.reset();

            })
            .catch(() => {
                // console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",

                });
            })
    }
    return (


     <div className="max-w-4xl mx-auto mt-12 bg-white rounded-2xl shadow-lg p-8">
  <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Add New Event</h1>

  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* Event Name */}
    <div>
      <label htmlFor="eventName" className="block text-sm font-medium text-gray-700 mb-1">Event Name</label>
      <input id="eventName" type="text" name="eventName" className="input input-bordered w-full" placeholder="Event Name" required/>
    </div>

    {/* Event Type */}
    <div>
      <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
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
      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
      <input id="location" type="text" name="location" className="input input-bordered w-full" placeholder="Location" required />
    </div>

    {/* Image URL */}
    <div>
      <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
      <input id="image" type="url" name="image" className="input input-bordered w-full" placeholder="Image URL" required />
    </div>

    {/* Date */}
    <div>
      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
      <input id="date" type="date" name="date" className="input input-bordered w-full" required/>
    </div>

    {/* Local Time */}
    <div>
      <label htmlFor="localTime" className="block text-sm font-medium text-gray-700 mb-1">Local Time</label>
      <input id="localTime" type="time" name="localTime" className="input input-bordered w-full" required />
    </div>

    {/* Participants */}
    <div>
      <label htmlFor="participants" className="block text-sm font-medium text-gray-700 mb-1">Max Participants</label>
      <input id="participants" type="number" name="participants" className="input input-bordered w-full" placeholder="Maximum" required />
    </div>

    {/* Entry Fee & Currency */}
    <div className="flex flex-col md:flex-row gap-3 md:col-span-2">
      <div className="flex-1">
        <label htmlFor="entryFee" className="block text-sm font-medium text-gray-700 mb-1">Entry Fee</label>
        <input id="entryFee" type="number" name="entryFee" className="input input-bordered w-full" placeholder="Entry Fee" required/>
      </div>
      <div className="flex-1">
        <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
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
      <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
      <textarea id="description" name="description" className="textarea textarea-bordered w-full h-28 resize-none" placeholder="Write event description..." required></textarea>
    </div>

    {/* Creator Name */}
    <div>
      <label htmlFor="hr_name" className="block text-sm font-medium text-gray-700 mb-1">Creator Name</label>
      <input id="hr_name" type="text" name="hr_name" className="input input-bordered w-full" defaultValue={user?.displayName} readOnly />
    </div>

    {/* Creator Email */}
    <div>
      <label htmlFor="hr_email" className="block text-sm font-medium text-gray-700 mb-1">Creator Email</label>
      <input id="hr_email" type="email" name="hr_email" className="input input-bordered w-full" defaultValue={user?.email} readOnly />
    </div>

    {/* Submit Button */}
    <div className="md:col-span-2">
      <button type="submit" className="btn btn-neutral w-full text-lg">
        Add Event
      </button>
    </div>

  </form>
</div>


    );
};

export default AddEvent;