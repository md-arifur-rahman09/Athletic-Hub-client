import React from 'react';

const Services = () => {
    const services = [
        {
            title: "Event Booking",
            description: "Book your favorite athletic events with just a few clicks. Simple, secure, and fast."
        },
        {
            title: "Event Management",
            description: "Are you an organizer? List your event with us and reach thousands of participants."
        },
        {
            title: "User Dashboard",
            description: "Manage your bookings, see your participation history, and stay updated on new events."
        },
        {
            title: "Email Notifications",
            description: "Stay informed with instant email alerts about upcoming events and booking confirmations."
        }
    ];

    return (
        <section className="max-w-6xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-xl">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                    <div key={index} className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition">
                        <h3 className="text-xl font-semibold text-indigo-800 mb-2">{service.title}</h3>
                        <p className="text-gray-700">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
