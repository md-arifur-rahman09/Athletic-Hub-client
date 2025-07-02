import React from 'react';
import { useNavigate } from 'react-router';

const Error = () => {
    const navigate = useNavigate();

    return (
        <section className="min-h-screen flex items-center justify-center bg-base-100 text-base-content px-4">
            <div className="text-center max-w-md">
                <h1 className="text-6xl font-extrabold text-error mb-4">404</h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-3">Page Not Found</h2>
                <p className="text-base-content/70 mb-6">
                    Sorry, the page you're looking for doesn't exist or has been moved. Please check the URL or return to the homepage.
                </p>
                <button
                    onClick={() => navigate('/')}
                    className="btn btn-primary text-sm md:text-base px-4"
                >
                    ⬅ Back to Home
                </button>
            </div>
        </section>
    );
};

export default Error;
