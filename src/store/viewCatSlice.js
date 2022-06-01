import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    url: null,
    isHide: true
};


const viewCatSlice = createSlice({
    name: 'viewCat',
    initialState,
    reducers: {
        showOriginalPicture(state, action) {
            state.url = action.payload.url;
            state.isHide = action.payload.isHide;
        },
        closeOriginalPicture(state) {
            state.url = null;
            state.isHide = true;
        }
    }
});

export const { showOriginalPicture, closeOriginalPicture } = viewCatSlice.actions;
export default viewCatSlice.reducer;