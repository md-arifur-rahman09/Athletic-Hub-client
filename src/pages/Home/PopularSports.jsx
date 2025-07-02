// PopularSports.jsx
import React from 'react';
import { FaFutbol, FaSwimmingPool, FaRunning, FaBullseye } from 'react-icons/fa';

const sports = [
  { name: 'Football', icon: <FaFutbol size={40} />, participants: '1M+' },
  { name: 'Swimming', icon: <FaSwimmingPool size={40} />, participants: '700K+' },
  { name: 'Marathon', icon: <FaRunning size={40} />, participants: '500K+' },
  { name: 'Archery', icon: <FaBullseye size={40} />, participants: '300K+' }
];

const PopularSports = () => {
  return (
    <section className="my-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-base-content">
        Popular Sports
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {sports.map((sport, index) => (
          <div
            key={index}
            className="bg-base-100 text-base-content rounded-xl border border-base-300 dark:border-base-content/20 shadow-sm hover:shadow-md transition duration-300 p-6 text-center"

          >
            <div className="text-base-content mb-4">{sport.icon}</div>
            <h4 className="text-xl font-semibold mb-1">{sport.name}</h4>
            <p className="text-sm text-base-content/70">{sport.participants} participants</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularSports;
