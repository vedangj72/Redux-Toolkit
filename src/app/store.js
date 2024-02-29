import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../feature/todoSlice'; // Correct import statement

export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
});