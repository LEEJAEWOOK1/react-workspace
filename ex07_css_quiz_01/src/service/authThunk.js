import { createAsyncThunk } from "@reduxjs/toolkit";
import { service_path } from "./service_ip_port";
let data_set = [
    {username:"aaa",password :"aaa", role : "USER"},
    {username:"bbb",password :"bbb", role : "USER"},
    {username:"ccc",password :"ccc", role : "USER"},
]
const path = service_path; //벡앤드 연동
export const loginThunk = createAsyncThunk(
  "loginThunk", 
  async ( user ) => {
    //console.log("login thunk user : ", user)
    const res = await fetch(path + "/members/login", { //백엔드 연동
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(user)
    })
    //const resResult = await res.json();
    //console.log("resResult : ", resResult)
    return {result:await res.json(), username:user.username}
    //return await res.json()
            //?{result:0, username:user.username}:
            //{result:1, username:user.username};
    /*
    const data = data_set.filter(data => data.username === user.username )[0]
    let result = 1;
    if( data?.password === user.password ) //data에 값이 있으면 비교해라
        result = 0;
    return {result, username:user.username}; //성공 0, 실패 1
    */
  }
);
export const registerThunk = createAsyncThunk(
    "registerThunk",
    async (user) => {
        const res = await fetch(path+"/members", { //백엔드 연동
            method : "post",
            body : user
        })
        //data_set = data_set.concat(user)
        //return {result : 0}
        if(res.ok)
         return {result : 0}

        const errorMsg = await res.text();
        throw new Error(errorMsg);
    }
);
export const memberThunk = createAsyncThunk(
    "memberThunk",
    async () => {
        const res = await fetch(path + "/members", {method:"get"}); //백엔드연동
        console.log(res)
        //if(res.ok)
        return await res.json() //response body를 JSON이라고 가정하고(믿고) 파싱해라
        //throw new Error()
        //return data_set;
    }
);
export const memberOneThunk = createAsyncThunk( 
    "memberOneThunk",
    async (user) => {
        const res = await fetch(path + "/members/"+user.username)//백엔드 연동
        console.log(user.username, typeof user.username)
        return await res.json();
        /*
        console.log("one Thunk : ", user)
        const data = data_set.filter(d => d.username === user.username)[0]
        console.log("one Thunk data : ", data)
        return data
        */
    }
);
export const memberDeleteThunk = createAsyncThunk(
    "memberDeleteThunk",
    async (user) => {
        const res = await fetch(path+"/members/"+user.username, { //백엔드 연동
            method : "delete"
        })
        if(res.ok)
            return 1;
        //console.log("res : ", res)
        //data_set = data_set.filter(d => d.username !== user.username)
        //return 1;
    }
);
export const memberModifyThunk = createAsyncThunk(
    "memberModifyThunk",
    async ({id, formData}) => {
        //{id:1, username:aaa, pwd:aaas, role:user}
        const res = await fetch(path+"/members/"+id,{ //백엔드 연동
            method : "put",
            headers: {},
            body : formData
        })
        //data_set = data_set.filter(d => d.username !== user.username)
        //data_set = data_set.concat(user)
        if(res.ok)
            return 1;
        throw new Error("수정 중 문제 발생")
    }
);