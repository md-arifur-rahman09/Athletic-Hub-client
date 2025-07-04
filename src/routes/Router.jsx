import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Root from "../layouts/Root";

import Register from '../pages/Register/Register'
import Login from "../pages/Login/Login";

import AddEvent from "../pages/AddEvent/AddEvent";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllEvents from "../pages/AllEvents/AllEvents";
import EventDetails from "../pages/EventDetails/EventDetails";
import BookingForm from "../pages/BookingForm/BookingForm";
import MyBookings from "../pages/MyBookings/MyBookings";
import MyPostedEvents from "../pages/MyPostedEvents/MyPostedEvents";
import UpdateEvent from "../pages/UpdateEvent/UpdateEvent";
import MyPostedEventsBookings from "../pages/MyPostedEventsBookings/MyPostedEventsBookings";
import About from "../pages/Footer/About";
import TermsAndConditions from "../pages/Footer/TermsAndConditions";
import Services from "../pages/Footer/Services";





export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            { index: true, Component: Home },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: 'addEvent',
                element: <PrivateRoute> <AddEvent></AddEvent></PrivateRoute>
            },
            {
                path: '/allEvents',
                Component: AllEvents,
                loader: () => fetch('https://athletic-hub-server-blue.vercel.app/allEvents')
            },
            {
                path: '/event/:id',
                Component: EventDetails,
                loader: ({ params }) => fetch(`https://athletic-hub-server-blue.vercel.app/event/${params.id}`)
            },
            {
                path: '/bookingForm/:id',
                element: <PrivateRoute><BookingForm ></BookingForm></PrivateRoute>
                
            },
            {
                path:'/myBookings',
                element:<PrivateRoute> <MyBookings></MyBookings></PrivateRoute>,
                

            },
            {
                path: '/myPostedEvents',
                element: <PrivateRoute> <MyPostedEvents></MyPostedEvents></PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateEvent></UpdateEvent> </PrivateRoute>,
                loader: ({params})=> fetch(`https://athletic-hub-server-blue.vercel.app/event/${params.id}`)
            },
            {
                path: '/details/:id',
                element: <PrivateRoute> <MyPostedEventsBookings></MyPostedEventsBookings></PrivateRoute>,
                loader: ({params})=> fetch(`https://athletic-hub-server-blue.vercel.app/events/${params.id}`,{
                    credentials: "include"
                })
            },
            {
                path    : '/about',
                Component:About
            },
            {
                path: '/terms',
                Component: TermsAndConditions
            },
            {
                path: '/services',
                Component: Services
            }
        ]

    },
    {
        path: '*',
        Component: Error
    }
])