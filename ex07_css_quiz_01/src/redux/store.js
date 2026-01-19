import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./inputSlice";
import authSlice from "./authSlice";
import memberDataSlice from "./memberDataSlice";

const store = configureStore({
    reducer : {
        //state.input = {login: {username:"", password:""}}
        input : inputSlice.reducer,
        auth : authSlice.reducer,
        memberData : memberDataSlice.reducer
    }

})
export default store;