import { createSlice } from "@reduxjs/toolkit";
import { postDeleteThunk, postLikedThunk, postModifyThunk, postOneThunk, postRegisterThunk, postThunk } from "../../service/post/postThunk";
import { createLoadingReducers } from "../commonLoadingHandlers";

const initialState = {data : null, dataOne : null, loading : false, error : null, result : false}
const postDataSlice = createSlice({
    name : "postDataSlice",
    initialState : initialState,
    reducers : {
        clearResult : (state) => {
            state.result = false;
        }
    },
    extraReducers : (builder) => {
        //포스트 조회
        builder
        .addCase(postThunk.fulfilled, (state, action) =>{
            state.loading = false;
            state.data = action.payload;
        })
        createLoadingReducers(builder, postThunk);
        //특정 포스트 조회
        builder
        .addCase(postOneThunk.fulfilled, (state, action) =>{
            state.loading = false;
            state.dataOne = action.payload;
        })
        createLoadingReducers(builder, postOneThunk);
        //포스트 삭제
        builder
        .addCase(postDeleteThunk.fulfilled, (state, action) =>{
            state.loading = false;
            state.result = action.payload;
        })
        createLoadingReducers(builder, postDeleteThunk);
        //포스트 추가
        builder
        .addCase(postRegisterThunk.fulfilled, (state, action) =>{
            state.loading = false;
            state.result = action.payload;
        })
        createLoadingReducers(builder, postRegisterThunk);
        //포스트 수정
        builder
        .addCase(postModifyThunk.fulfilled, (state, action) =>{
            state.loading = false;
            state.result = action.payload;
        })
        createLoadingReducers(builder, postModifyThunk);
        //좋아요
        builder
        .addCase(postLikedThunk.fulfilled, (state, action) =>{
            state.loading = false;
            const {postId, liked} = action.payload
            const post = state.data.find(post => post.id === postId)
            if(post){
                post.liked = liked;
                post.likedCount += liked ? 1 : -1;
            }
        })
        createLoadingReducers(builder, postLikedThunk);
    }
})
export const {clearResult} = postDataSlice.actions;
export default postDataSlice;