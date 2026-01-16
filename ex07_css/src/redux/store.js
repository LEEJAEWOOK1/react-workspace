import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./inputSlice";
import authSlice from "./authSlice";

const store = configureStore({
    reducer : {
        input : inputSlice.reducer,
        auth : authSlice.reducer
    }
});
export default store;