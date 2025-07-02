import React from 'react';
import { useTitle } from '../../hooks/usetitle';

const TermsAndConditions = () => {
  useTitle("Terms & Conditions")
  return (
    <section className="pt-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-10 pb-16 bg-base-100 text-base-content shadow-md rounded-xl border border-base-300 dark:border-base-content/10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-base-content">
        Terms & Conditions
      </h2>

      <ul className="list-disc list-inside space-y-4 text-base-content/80 leading-relaxed text-base">
        <li>
          <strong className="text-base-content">Valid Registration:</strong> Users must provide accurate, up-to-date personal and contact information during account registration. Misuse or impersonation may result in immediate suspension.
        </li>
        <li>
          <strong className="text-base-content">Booking Policy:</strong> All event bookings are final upon confirmation. Once an event is booked, no refunds, cancellations, or ticket transfers are permitted unless otherwise stated by the event organizer.
        </li>
        <li>
          <strong className="text-base-content">Code of Conduct:</strong> Any form of harassment, abuse, or inappropriate behavior during an event may lead to a permanent ban from the platform and disqualification from all future activities.
        </li>
        <li>
          <strong className="text-base-content">Participation Liability:</strong> While we prioritize safe, verified events, all participants assume personal risk for injuries or accidents during any event. Always check your health condition before participating.
        </li>
        <li>
          <strong className="text-base-content">Organizer Responsibility:</strong> Event organizers are solely responsible for event logistics, permissions, and any disputes arising during or after the event. Athletic Hub only facilitates the connection between participants and organizers.
        </li>
        <li>
          <strong className="text-base-content">Privacy & Data:</strong> We never sell or distribute your personal data to third parties without consent. Data is securely stored and used only to enhance your experience within the platform.
        </li>
        <li>
          <strong className="text-base-content">Intellectual Property:</strong> All content, branding, and digital materials provided by Athletic Hub remain the intellectual property of the company. Unauthorized reproduction or misuse is strictly prohibited.
        </li>
        <li>
          <strong className="text-base-content">Platform Changes:</strong> We reserve the right to modify terms, features, or pricing with prior notice. Continued use of the platform implies acceptance of the most recent terms.
        </li>
      </ul>
    </section>
  );
};

export default TermsAndConditions;
