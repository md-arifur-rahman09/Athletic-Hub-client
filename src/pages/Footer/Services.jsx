import React from 'react';
import { useTitle } from '../../hooks/usetitle';

const Services = () => {
    useTitle('Services');
    const services = [
        {
            title: "🎟️ Event Booking",
            description:
                "Easily browse and book your favorite sports events in just a few clicks. Whether you're into football, running, swimming, or niche competitions—our platform ensures a seamless and secure booking experience."
        },
        {
            title: "📢 Event Management",
            description:
                "Are you an organizer? Create, manage, and promote your sporting events with tools designed for simplicity and scale. Get discovered by thousands of potential participants across the globe."
        },
        {
            title: "🧭 User Dashboard",
            description:
                "Your personalized dashboard helps you track your bookings, manage participation history, and get recommendations based on your interests. Stay organized, stay involved."
        },
        {
            title: "📬 Email Notifications",
            description:
                "We keep you informed with timely email alerts—get notified about event openings, schedule changes, reminders, and confirmations so you never miss a moment."
        },
        {
            title: "💡 Smart Recommendations",
            description:
                "Discover events tailored just for you based on your past activity, preferences, and location. Our smart algorithms bring the right events to your fingertips."
        },
        {
            title: "🛡️ Secure Payments",
            description:
                "Make bookings with peace of mind. We partner with trusted payment gateways to ensure every transaction is encrypted, smooth, and safe."
        }
    ];

    return (
        <section className="pt-12 max-w-6xl mx-auto px-4 sm:px-6 md:px-10 pb-16 bg-base-100 text-base-content">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-base-content">
                Our Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-base-100 border border-base-300 dark:border-base-content/20 text-base-content rounded-xl shadow-sm hover:shadow-md transition duration-300 p-6"
                    >
                        <h3 className="text-xl font-semibold mb-2 text-base-content">
                            {service.title}
                        </h3>
                        <p className="text-base text-base-content/80 leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
