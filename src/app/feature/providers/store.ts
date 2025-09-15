'use client';

import { configureStore } from '@reduxjs/toolkit';
import hoverReducer from './reducer';

const store = configureStore({
    reducer: {
        hover: hoverReducer,
    },
}); 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;