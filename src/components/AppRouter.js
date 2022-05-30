import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import ScreenAllCats from "../views/ScreenAllCats";
import ScreenFavoriteCats from "../views/ScreenFavoriteCats";
import { FAVORITE_CATS } from "../constants/ROUTS";


export default function AppRouter() {
    return (
        <Routes>
            <Route path={"/"} element={<ScreenAllCats />} />
            <Route path={FAVORITE_CATS} element={<ScreenFavoriteCats />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}
