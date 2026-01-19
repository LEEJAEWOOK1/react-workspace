import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "../service/authThunk";
import { createLoadingReducers } from "./commonLoadingHandlers";

const saveAuth = sessionStorage.getItem("auth");
const initialState = {
    isLoggedIn: false, username : null, loading : false, error : null, result : 0
}
const authSlice = createSlice({
    name : "auth",
    initialState : saveAuth? JSON.parse(saveAuth):initialState,
    reducers : {
        logout : (state) => {
            sessionStorage.clear();
            return initialState;
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(loginThunk.fulfilled,(state, action)=>{
            //console.log({...state})
            //console.log(action)
            state.loading = false;
            state.error = null;
            state.result = action.payload.result;
            if(action.payload.result === 0){
                state.isLoggedIn = true;
                state.username = action.payload.username
                sessionStorage.setItem("auth", JSON.stringify({...state}))
            }
        })
        createLoadingReducers(builder, loginThunk)

        builder
        .addCase(registerThunk.fulfilled,(state, action)=>{
            state.loading = false;
            state.error = null;
            state.result = action.payload.result
        })
        createLoadingReducers(builder, registerThunk)
    }
})
export const {logout} = authSlice.actions
export default authSlice;