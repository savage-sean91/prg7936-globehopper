import React, { useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    useMatch,
    useLocation
  } from "react-router-dom";
import Authenticated from '../components/Authenticated';
import Unauthenticated from '../components/Unauthenticated';
import LoginPage from '../pages/login/Login';
import Register from '../pages/register/Register';

function Layout() {
    const [user, setUser] = useState("test");
    /*let currentLocation = useLocation();
    let pathMatches = useMatch(currentLocation.pathname);
    console.log(pathMatches);*/

    return (
        <>
            {user ? (
                // Signed in
                <Routes>
                    <Route index element={<Authenticated />} />
                    {/* <Route path="countries" >
                        <Route index element={<AllCountries />} />
                        <Route path=":countryId" element={<CountryDetailModal />} />
                    </Route> */}
                </Routes>
            ) : (
                // Not signed in
                <Routes>
                    <Route path="/" element={<Unauthenticated />}>
                        <Route index element={<LoginPage />} />
                        <Route path="register" element={<Register />} />
                    </Route>
                </Routes>
            )}
        </>
    );
}

export default Layout;