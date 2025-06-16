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
    <section className="my-16 max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-10">Popular Sports</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {sports.map((sport, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="text-indigo-500 mb-4">{sport.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{sport.name}</h4>
            <p className="text-gray-500">{sport.participants} participants</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularSports;
