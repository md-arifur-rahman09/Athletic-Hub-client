import React, { use } from 'react';
import { AuthContext } from '../../authContext/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddEvent = () => {

    const { user } = use(AuthContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const eventInfo = Object.fromEntries(formData.entries());

        console.log(eventInfo);
        axios.post('http://localhost:3000/allEvents', eventInfo)
            .then(res => {
                console.log(res.data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your event is succesfully added",
                    showConfirmButton: false,
                    timer: 1500
                });
                // form.reset();
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",

                });
            })
    }
    return (
        <div className="card bg-base-100  max-w-3xl shrink-0 shadow-2xl mx-auto mt-10">
            <div className="card-body">
                <h1 className='text-5xl font-bold text-center'>Add New Event</h1>
                <form onSubmit={handleSubmit} className="fieldset grid grid-cols-1 lg:grid-cols-2 ">

                    <div>

                        <label className="label"> Event Name</label>
                        <br />
                        <input type="text" name='eventName' className="input" placeholder="Event Name" />
                    </div>

                    <div>
                        <label className="label">Event Type</label>
                        <br />
                        <select defaultValue="Select one" name='type' className="select">
                            <option disabled={true}>Select one</option>
                            <option>Swimming</option>
                            <option>Long Jump</option>
                            <option>High Jump</option>
                            <option>Shooting</option>
                            <option>Archery</option>
                            <option>Football</option>
                            <option>Hockey</option>
                        </select>
                    </div>


                    <div>

                        <label className="label">Date</label>
                        <br />
                        <input type="date" name='date' className="input" placeholder="Date" />
                    </div>

                    <div>
                        <label className="label">Local Time</label>
                        <br />
                        <input type="time" name='localTime' className="input" placeholder="time" />

                    </div>

                    <div>
                        <label className="label">Location</label>
                        <br />
                        <input type="text" name='location' className="input" placeholder="Location" />
                    </div>

                    <div>
                        <label className="label">Image URL</label>
                        <br />
                        <input type="url" name='image' className="input" placeholder="Image URL" />
                    </div>

                    <div>
                        <label className="label">Maximum Participants</label>
                        <br />
                        <input type="text" className="input" name='participants' placeholder="max. participants" />
                    </div>

                    <div>
                        <label className="label">Entry Fee</label>
                        <br />
                        <input type="number" name='entryFee' className="input" placeholder="Entry Fee" />
                    </div>

                    <div>
                        <label className="label">Currency</label>
                        <br />
                        <select defaultValue="pick one" name='currency' className="select">
                            <option disabled={true}>pick one</option>
                            <option>USD</option>
                            <option>EURO</option>
                            <option>BDT</option>
                        </select>
                    </div>





                    <div className="lg:col-span-2">
                        <label className="label">Description</label>
                        <br />
                        <textarea className="textarea lg:w-full " name="description" placeholder="Description"></textarea>
                    </div>

                    <div>

                        <label className="label">Creator Name</label>
                        <br />
                        <input type="text" name='hr_name' className="input" defaultValue={user.displayName} />
                    </div>

                    <div>
                        <label className="label">Creator Email</label>
                        <br />
                        <input type="email" name='hr_email' className="input" defaultValue={user.email} />
                    </div>





                    <input className='btn btn-neutral lg:w-full lg:col-span-2 mt-4' type="submit" value="Add Event" />

                </form>
            </div>
        </div>
    );
};

export default AddEvent;