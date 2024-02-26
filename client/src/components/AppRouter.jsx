import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Context } from "../index";
import { authRoutes, publicRoutes } from "../routes";

const AppRouter = () => {
    const { user } = useContext(Context)

    return (
        <Routes>
            {user.isAuth && authRoutes.map(route =>
                <Route key={route.path} path={route.path} element={<route.component />} />
            )}
            {publicRoutes.map(route =>
                <Route key={route.path} path={route.path} element={<route.component />} />
            )}
        </Routes>
    );
}

export default AppRouter;
