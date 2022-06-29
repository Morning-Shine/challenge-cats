import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    scrollTopAllCats: 0
};


const allCatsCurrentScrollSlice = createSlice({
    name: 'allCatsCurrentScrollSlice',
    initialState,
    reducers: {
        // addFavoriteCat(state, action) {
        //     state.cats.push({
        //         id: action.payload.item.id,
        //         url: action.payload.item.url
        //     });
        // },
        changeScrollHeight(state, action) {
            console.log(action);
            state.scrollTopAllCats = action.payload
        }
    }
});

export const { changeScrollHeight } = allCatsCurrentScrollSlice.actions;
export default allCatsCurrentScrollSlice.reducer;