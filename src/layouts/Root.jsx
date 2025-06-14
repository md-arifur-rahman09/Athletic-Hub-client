import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Error/Navbar/Navbar';
import Footer from '../pages/Footer/Footer';

const Root = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main>
                <Suspense fallback={<h2>Loading....</h2>}>
                    <Outlet></Outlet>
                </Suspense>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;