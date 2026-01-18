import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "../service/authThunk";
import { createLoadingReducers } from "./commonLoadingHandlers";
const initialState = { isLoggedIn : false, username : null, loading : false, error : null, result : 0 }
const savedAuth = sessionStorage.getItem("auth")
const authSlice = createSlice({
    name : "auth",
    initialState : savedAuth? JSON.parse(savedAuth) : initialState,
    reducers : {
        login : (state, action)=>{
            state.isLoggedIn = true;
            state.username = action.payload.username
            sessionStorage.setItem("auth", JSON.stringify({...state}))
        },
        logout : () =>{
            sessionStorage.clear();
            return initialState;
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(loginThunk.fulfilled,(state, action) => {
            //console.log("fulfilled action : ", action)
            state.result = action.payload.result
            state.loading = false;
            state.error = null;
        })
        createLoadingReducers(builder, loginThunk);
        
        builder
        .addCase(registerThunk.fulfilled,(state, action) => {
            //console.log("fulfilled action : ", action)
            state.result = action.payload.result
            state.loading = false;
            state.error = null;
        })
        createLoadingReducers(builder, registerThunk);
    }
});
export const {login, logout} = authSlice.actions
export default authSlice