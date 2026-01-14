import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:4000/"
export const memberThunk = createAsyncThunk(
    "memThunk", //이름 설정 redux에서 사용하는 고유 값
    async (path) => { //(): 경로를 받아줌
        //method:get => 데이터 요청 하는 경우 사용 
        //모든 데이터 또는 검색 특정 데이터를 받아 오는 경우 사용
        const res = await fetch(url + path,{method:"get"});
        //console.log("thunk 실행");
        //throw new Error("서버 에러 발생")
        return await res.json();
    }
)