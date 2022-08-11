import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/AuthSlice"

export default configureStore({
    reducer: {
        user: userReducer,
    }
}) 
