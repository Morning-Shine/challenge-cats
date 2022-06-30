import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // scrollTopAllCats: 0
};


const currentScrollSlice = createSlice({
    name: 'currentScrollSlice',
    initialState,
    reducers: {
        changeScrollHeight(state, action) {
            state[action.payload.path] = action.payload.height;
        }
    }
});

export const { changeScrollHeight } = currentScrollSlice.actions;
export default currentScrollSlice.reducer;