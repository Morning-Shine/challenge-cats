import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    cats: [],
    status: null,
    error: null
};

export const fetchCats = createAsyncThunk(
    'cats/fetchCats',
    async function (currentPage, { rejectWithValue }) {
        try {
            // console.log('currentPage: ', currentPage);
            const link = `https://api.thecatapi.com/v1/images/search?limit=2&order=random&size=small` //для беск. скролла
            // const link = `https://api.thecatapi.com/v1/images/search?limit=2&page=${currentPage}&order=random&size=small` //для беск. скролла
            // console.log('link: ', link);
            // const link = `https://api.thecatapi.com/v1/images/search?limit=40&order=random&size=small`
            const response = await fetch(
                link, {
                // headers: { 'x-api-key': 'b899d940-c77a-48d6-8902-a7eb2e04d023' }
            });
            if (!response.ok) throw new Error('ошибка получения данных от сервера');
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const catsSlice = createSlice({
    name: 'cats',
    initialState,
    extraReducers: {
        [fetchCats.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchCats.fulfilled]: (state, action) => {
            // console.log('action: ', action);
            state.status = 'resolved';
            state.cats = [...state.cats, ...action.payload];
            // state.cats = action.payload;
        },
        [fetchCats.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});


export default catsSlice.reducer;