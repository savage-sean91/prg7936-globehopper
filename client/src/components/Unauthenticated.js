import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet
  } from "react-router-dom";

function Unauthenticated() {
    return (
        <>
            <h2>You are not signed in to use Globehopper</h2>
            <Outlet />
        </>
    );
}

export default Unauthenticated;