import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../../authContext/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, logoutUser } = use(AuthContext);
    console.log(user);
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allEvents'>All Events</NavLink></li>

        {user && <>
        <li><NavLink to='/addEvent'>Add Event</NavLink></li>
        <li><NavLink to='/myBookings'>My Bookings</NavLink></li>
        <li><NavLink to='/myPostedEvents'>My Posted Events</NavLink></li>
   
        </>}

    </>

    const handleLogout = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });

        swalWithBootstrapButtons.fire({
            title: "Do you want to log out?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, log me out",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                logoutUser()
                    .then(() => {
                        swalWithBootstrapButtons.fire({
                            title: "Logged out",
                            text: "You are logged out successfully.",
                            icon: "success"
                        });
                    })
                    .catch((error) => {
                        console.error("Logout Error:", error);
                        swalWithBootstrapButtons.fire({
                            title: "Error",
                            text: "Something went wrong. Try again!",
                            icon: "error"
                        });
                    });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "You are still logged in.",
                    icon: "info"
                });
            }
        });
    };


    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl ">Athletic Hub</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>

                            <img className='w-9 mr-3 rounded-md' src={user?.photoURL} title={`${user.displayName} - ${user.email}`} />

                            <Link to='/login'>  <button onClick={handleLogout} className='btn'>Logout</button></Link>
                        </>
                        : <> <Link className='btn' to='/login'>Login</Link> </>
                }
            </div>
        </div>
    );
};

export default Navbar;