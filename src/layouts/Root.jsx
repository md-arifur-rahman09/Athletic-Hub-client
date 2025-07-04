import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Error/Navbar/Navbar';
import Footer from '../pages/Footer/Footer';
import Loading from '../pages/Loading/Loading';

const Root = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Fixed Navbar */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-base-100 shadow-md">
                <Navbar />
            </header>

            {/* Main content with top padding */}
            <main className="flex-grow pt-16 px-4 md:px-6 lg:px-0">
                <Suspense fallback={<Loading />}>
                    <Outlet />
                </Suspense>
            </main>

            {/* Footer */}
            <footer className="bg-base-200">
                <Footer />
            </footer>
        </div>
    );
};

export default Root;
