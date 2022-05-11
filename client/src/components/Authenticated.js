import React from 'react';
import Home from '../pages/home/Home';
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet
  } from "react-router-dom";

function Authenticated() {
    return (
        <Home />
    );
}

export default Authenticated;