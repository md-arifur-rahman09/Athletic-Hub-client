
import React, { useEffect, useState } from 'react';
import '../../../public/testimonials.json';



const Testimonials = () => {
    const [testimonialsData, setTestimonialsData] = useState([]);

    useEffect(() => {
        fetch('/testimonials.json')
            .then(res => res.json())
            .then(data => setTestimonialsData(data));
    }, []);

    return (
        <section className="my-16 max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-10">What Our Users Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {testimonialsData?.map((t, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                        <img
                            src={t.image}
                            alt={t.name}
                            className="w-20 h-20 mx-auto rounded-full mb-4 border-4 border-indigo-200"
                        />
                        <h4 className="text-xl font-semibold mb-2">{t.name}</h4>
                        <p className="text-gray-600">{t.comment}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
