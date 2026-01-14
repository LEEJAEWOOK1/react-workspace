//state에 대한 값 정의
import {createSlice} from "@reduxjs/toolkit";
import { memberThunk } from "../service/memberThunk";
import { createLoadingReducers } from "./commonLoadingHandlers";
const memberDataSlice = createSlice({
    name : "memberData",
    initialState : {data : null, loading : false, error : null},
    reducers : {
        /*list : (state, action) => {
            //console.log("list state : ", {...state})
            //console.log("list action : ", {...action})
            state.data = action.payload //배열형태가 들어온다.
        }
        */
    },
    extraReducers : (builder) => {
        builder
            /*
            .addCase(memberThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
                //console.log("...로딩중");
            })*/
            .addCase(memberThunk.fulfilled, (state, action)=>{
                //console.log("데이터 받아옴");
                //console.log("state : ", {...state})
                //console.log("action : ", action)
                state.data = action.payload
                state.loading = false;
                state.error = null;
            })
            /*
            .addCase(memberThunk.rejected, (state, action) => {
                console.log("에러 발생 : ", action);
                state.loading = false;
                state.error = action.error.message;
            })*/
        createLoadingReducers(builder, memberThunk)
    } //현재 로딩중이다, 끝났다 이런거 표현
});
export const {list} = memberDataSlice.actions; //여기 정의된게 list 변수에 들어간다. 
export default memberDataSlice;