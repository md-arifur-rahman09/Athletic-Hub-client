import React from 'react';

const testimonialsData = [
    {
        name: "John Doe",
        comment: "This platform is incredibly useful. I was able to browse various athletic events and join three of them without facing any hassle. The UI is smooth, and everything feels intuitive and easy to use. Highly recommended for sports enthusiasts who want to participate in real events regularly.",
        image: "https://i.pravatar.cc/100?img=1"
    },
    {
        name: "Elita Morgan",
        comment: "I truly love how simple, user-friendly, and well-organized this booking system is. The registration process is smooth, and everything is clearly explained. I never faced any issues while joining events. It’s a wonderful platform that saves time and removes all confusion.",
        image: "https://i.postimg.cc/FzP0SNtP/ladies3.jpg"
    },
    {
        name: "Mathew Tuck",
        comment: "This is the best sports event platform I’ve come across. From event discovery to final booking, every step was efficient and user-friendly. I appreciate the transparency and trustworthiness of the organizers. I’ll surely use this platform again for future events.",
        image: "https://i.pravatar.cc/100?img=3"
    }
];

const Testimonials = () => {

    return (
        <section className="my-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-base-content">
                What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonialsData?.map((t, index) => (
                    <div
                        key={index}
                        className="bg-base-100 text-base-content rounded-xl border border-base-300 dark:border-base-content/20 shadow-md hover:shadow-lg transition duration-300 p-6 text-center"
                    >

                        <img
                            src={t.image}
                            alt={t.name}
                            className="w-20 h-20 mx-auto rounded-full mb-4 border-4 border-primary/30 object-cover"
                        />
                        <h4 className="text-xl font-semibold mb-2">{t.name}</h4>
                        <p className="text-sm text-base-content/70">{t.comment}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
