import React from 'react';

const clubs = [
    {
        name: 'London Striders',
        description: 'Join weekly sprint and endurance meetups across Hyde Park and the Thames Path.',
        location: 'London, UK',
        members: 320
    },
    {
        name: 'Tokyo Swim Tribe',
        description: 'Train in Olympic-class pools and outdoor clubs throughout Tokyo’s metro area.',
        location: 'Tokyo, Japan',
        members: 290
    },
    {
        name: 'LA Trail Runners',
        description: 'Weekend runs through Griffith Park, Santa Monica mountains, and beyond.',
        location: 'Los Angeles, USA',
        members: 410
    },
    {
        name: 'Barcelona Archery Guild',
        description: 'Sharpen your skills with pro coaches at weekly medieval-style sessions.',
        location: 'Barcelona, Spain',
        members: 175
    },
    {
        name: 'Sydney Paddlers Collective',
        description: 'Enjoy water sports and kayak training along the Sydney Harbour every weekend.',
        location: 'Sydney, Australia',
        members: 240
    },
    {
        name: 'Toronto Fit League',
        description: 'From functional fitness to sports drills — connect with trainers & groups across the city.',
        location: 'Toronto, Canada',
        members: 360
    }
];

const FindClubs = () => {
    return (
        <section className="my-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-base-content">
                Explore Global Sports Communities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {clubs.map((club, index) => (
                    <div
                        key={index}
                        className="bg-base-100 text-base-content rounded-xl border border-base-300 dark:border-base-content/20 shadow-sm hover:shadow-md transition duration-300 p-6"

                    >
                        <h3 className="text-xl font-semibold mb-2 text-base-content">{club.name}</h3>
                        <p className="text-sm mb-3 text-base-content/70">{club.description}</p>
                        <div className="text-sm space-y-1 text-base-content">
                            <p>📍 <span className="font-medium">{club.location}</span></p>
                            <p>👥 {club.members} members</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FindClubs;
