import React, { useState } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import ScreenAllCats from "../views/ScreenAllCats";
import ScreenFavoriteCats from "../views/ScreenFavoriteCats";
import { ALL_CATS, FAVORITE_CATS } from "../constants/ROUTS";


export default function AppRouter() {

    return (
        <Routes>
            <Route path={ALL_CATS} element={<ScreenAllCats />} />
            <Route path={FAVORITE_CATS} element={<ScreenFavoriteCats />} />
            <Route path="*" element={<Navigate to={ALL_CATS} />} />
        </Routes>
    )
}
