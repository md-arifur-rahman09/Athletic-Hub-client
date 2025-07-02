import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Error/Navbar/Navbar';
import Footer from '../pages/Footer/Footer';
import Loading from '../pages/Loading/Loading';

const Root = () => {
    return (
        <div >
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className='min-h-screen mb-10'>
                <Suspense fallback={<h2><Loading></Loading></h2>}>
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