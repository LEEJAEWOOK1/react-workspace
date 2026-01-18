import { createSlice } from "@reduxjs/toolkit";
import { createLoadingReducers } from "./commonLoadingHandlers";
import { memberThunk } from "../service/authThunk";

const memberDataSlice = createSlice({
    name : "memberData",
    initialState : {data : null, loading : false, error : null},
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(memberThunk.fulfilled, (state, action)=>{
                        //console.log("데이터 받아옴");
                        //console.log("state : ", {...state})
                        console.log("action : ", action)
                        state.data = action.payload
                        state.loading = false;
                        state.error = null;
        })
        createLoadingReducers(builder, memberThunk)
    }
})
export default memberDataSlice;