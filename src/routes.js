import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import About from "./v1/views/About/About";
import History from "./v1/views/History/History";
import Agroholding from "./v1/views/Agroholding/Agroholding";
import Main from "./v2/views/Main";
import Profile from "./v2/views/Profile";

const routesV1 = () => (
    <Routes>
        <Route
            path={'/'}
            element={<About/>}
        />
        <Route
            path={'/history'}
            element={<History/>}
        />
        <Route
            path={'/agroholding'}
            element={<Agroholding/>}
        />
        <Route
            path={'*'}
            element={<Navigate to="/" replace={<About/>} />}
        />
    </Routes>
)

const routesV2 = () => (
    <Routes>
        <Route
            path={'/'}
            element={<Main/>}
        />
        <Route
            path={'/profile'}
            element={<Profile/>}
        />
        <Route
            path={'*'}
            element={<Navigate to="/" replace={<Main/>} />}
        />
    </Routes>
)

const RoutesHandler = () => routesV2()

export default RoutesHandler