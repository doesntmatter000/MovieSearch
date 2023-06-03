import {configureStore} from "@reduxjs/toolkit";
import popularSlice from './features/slice'

export const store = configureStore({
    reducer: {
        popular1: popularSlice,
    }
})