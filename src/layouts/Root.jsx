import React from 'react';
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
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;