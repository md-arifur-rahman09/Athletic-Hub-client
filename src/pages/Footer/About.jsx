import React, { use } from 'react';
import { AuthContext } from '../../authContext/AuthContext';

const About = () => {
  const { user } = use(AuthContext);

  return (
    <section className="max-w-5xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-xl">
      <h2 className="text-4xl font-bold text-center text-indigo-700 mb-6">About Athletic Hub</h2>

      <p className="text-gray-700 text-lg mb-4 leading-relaxed">
        <strong>Athletic Hub</strong> is a dynamic sports event booking platform designed to connect athletes, enthusiasts,
        and organizers in one place. We believe sports are not just games – they’re a lifestyle, a community, and a source of inspiration.
      </p>

      <div className="space-y-5">
        <div>
          <h3 className="text-xl font-semibold text-indigo-600 mb-1">🎯 Our Mission</h3>
          <p className="text-gray-700">
            To make sports participation and organization easier, accessible, and more organized through modern technology.
            Whether you’re looking to participate in a marathon, football tournament, or a cycling challenge — we’ve got you covered.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-indigo-600 mb-1">🌐 What We Offer</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Easy-to-use event booking system</li>
            <li>Event discovery by category, location, and date</li>
            <li>Organizer tools to manage and promote events</li>
            <li>User dashboard to track your booked and attended events</li>
            <li>Instant notifications and reminders</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-indigo-600 mb-1">🏅 Why Choose Athletic Hub?</h3>
          <p className="text-gray-700">
            Unlike generic platforms, Athletic Hub is purpose-built for the athletic community. We foster inclusivity,
            motivation, and passion for physical fitness. Every event you join brings you closer to a healthier and
            stronger version of yourself.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-indigo-600 mb-1">👨‍💻 About the Developer</h3>
          <p className="text-gray-700">
            This platform is developed with love and dedication by <span className="text-blue-600 font-medium">{user?.displayName || "Md Arifurr Rahman"}</span>,
            a passionate web developer with a dream to bring the athletic world online. Every feature is crafted with care to enhance your sporting experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
