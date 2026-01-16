import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "../service/authThunk";
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
        /*
        .addCase(loginThunk.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        */
        .addCase(loginThunk.fulfilled,(state, action) => {
            //console.log("fulfilled action : ", action)
            state.result = action.payload.result
            state.loading = false;
            state.error = null;
        })
        /*
        .addCase(loginThunk.rejected,(state,action) =>{
            state.loading = false;
            state.error = action.error.message;
        })
        */
       createLoadingReducers(builder, loginThunk)
    }
});
export const {login, logout} = authSlice.actions
export default authSlice