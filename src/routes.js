import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import About from "./views/About/About";
import History from "./views/History/History";
import Agroholding from "./views/Agroholding/Agroholding";

function RoutesHandler() {
    return (
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
}

export default RoutesHandler