import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cats: [],
};


const favoriteCatsSlice = createSlice({
    name: 'favoriteCatsSlice',
    initialState,
    reducers: {
        addFavoriteCat(state, action) {
            state.cats.push({
                id: action.payload.item.id,
                url: action.payload.item.url
            });
        },
        removeFavoriteCat(state, action) {
            state.cats = state.cats.filter(cat => cat.id !== action.payload.item.id);
        }
    }
});

export const { addFavoriteCat, removeFavoriteCat } = favoriteCatsSlice.actions;
export default favoriteCatsSlice.reducer;