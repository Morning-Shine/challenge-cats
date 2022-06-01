import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import catsSlice from "./catsSlice";
import favoriteCatsSlice from "./favoriteCatsSlice";
import viewCatSlice from "./viewCatSlice";



const persistConfig = {
    key: "root",
    storage,
    whitelist: 'favoriteCats'
};

const rootReducer = combineReducers({
    cats: catsSlice,
    favoriteCats: favoriteCatsSlice,
    viewCat: viewCatSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);