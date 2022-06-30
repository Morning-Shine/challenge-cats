import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // scrollTopAllCats: 0
};


const currentScrollSlice = createSlice({
    name: 'currentScrollSlice',
    initialState,
    reducers: {
        // addFavoriteCat(state, action) {
        //     state.cats.push({
        //         id: action.payload.item.id,
        //         url: action.payload.item.url
        //     });
        // },
        changeScrollHeight(state, action) {
            state[action.payload.path] = action.payload.height;
            // console.log(action);
        }
    }
});

export const { changeScrollHeight } = currentScrollSlice.actions;
export default currentScrollSlice.reducer;