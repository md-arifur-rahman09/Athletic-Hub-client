import React, { use } from 'react';
import { AuthContext } from '../../authContext/AuthContext';
import { useTitle } from '../../hooks/usetitle';

const About = () => {
  const { user } = use(AuthContext);
  useTitle('About');

  return (
    <section className=" max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-12 bg-base-100 text-base-content shadow-md rounded-xl border border-base-300 dark:border-base-content/10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-base-content">
        About Athletic Hub
      </h2>

      <p className="text-base md:text-lg mb-6 leading-relaxed text-base-content/80">
        <strong>Athletic Hub</strong> is a dynamic sports event booking platform designed to connect athletes,
        enthusiasts, and organizers in one place. We believe sports are not just games—they’re a lifestyle,
        a community, and a source of inspiration.
      </p>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-base-content mb-2">🎯 Our Mission</h3>
          <p className="text-base-content/80">
            To make sports participation and organization easier, accessible, and more seamless through modern technology.
            Whether you’re joining a marathon, football tournament, or cycling challenge—we’ve got you covered.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-base-content mb-2">🌐 What We Offer</h3>
          <ul className="list-disc list-inside text-base-content/80 space-y-1">
            <li>Intuitive event booking system</li>
            <li>Event discovery by category, location, and date</li>
            <li>Organizer tools to manage and promote events</li>
            <li>User dashboard to track your journey</li>
            <li>Instant updates and notifications</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-base-content mb-2">🏅 Why Choose Athletic Hub?</h3>
          <p className="text-base-content/80">
            Unlike generic platforms, Athletic Hub is crafted for the athletic community. We champion inclusivity,
            motivation, and purpose-driven fitness. Every event brings you closer to your best self.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-base-content mb-2">👨‍💻 About the Developer</h3>
          <p className="text-base-content/80">
            This platform is built with passion by <span className="font-semibold text-accent">{user?.displayName || 'Md Arifurr Rahman'}</span>,
            a dedicated web developer committed to enhancing your sporting experience with thoughtful design and smooth functionality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
