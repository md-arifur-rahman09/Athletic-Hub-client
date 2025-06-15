import React from 'react';

const TermsAndConditions = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Terms & Conditions</h2>
      <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
        <li>Users must register with valid information to book any event.</li>
        <li>All bookings are final. No refunds or transfers after confirmation.</li>
        <li>Any misbehavior during events may lead to a ban from future participation.</li>
        <li>We are not responsible for injuries during any events — participants join at their own risk.</li>
        <li>Respect all event organizers, staff, and fellow participants.</li>
        <li>Your data is safe with us — we never share your info with third parties.</li>
      </ul>
    </section>
  );
};

export default TermsAndConditions;
