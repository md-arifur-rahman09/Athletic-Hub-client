import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Root from "../layouts/Root";
import { Component } from "react";
import Register from '../pages/Register/Register'
import Login from "../pages/Login/Login";

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
                path:'/login',
                Component: Login
            }
        ]

    },
    {
        path: '*',
        Component: Error
    }
])