import React, { useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    useMatch,
    useLocation
} from "react-router-dom";
import {
    useSelector
} from 'react-redux';
import Authenticated from '../components/Authenticated';
import Unauthenticated from '../components/Unauthenticated';
import LoginPage from '../pages/login/Login';
import AdminPage from '../pages/admin/Admin';
import Register from '../pages/register/Register';

const Layout = (props) => {
    const user = useSelector((state) => {
        return state ? state.user : null;
    });

    return (
        <>
            {user ? (
                // Signed in
                <Routes>
                    <Route index element={<Authenticated />} />
                    {user.role === "admin" ? (
                        <Route path="admin" element={<AdminPage />} />
                    ) : null}
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