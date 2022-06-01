import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    cats: [],
    status: null,
    error: null
};

export const fetchCats = createAsyncThunk(
    'cats/fetchCats',
    async function (_, { rejectWithValue }) {
        try {
            const link = `https://api.thecatapi.com/v1/images/search?limit=42&order=random&size=small` //для беск. скролла
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