import {createSlice} from "@reduxjs/toolkit";
const inputSlice = createSlice({
    name : "input",
    initialState : {
        login : {username:"", password:""},
        register : {username: "", password:"", role:""}
    },
    reducers : {
        changeinput : (state, action) => {
            //console.log("changeinput state : ", {...state})
            //console.log("changeinput state : ", {...state["login"]})
            //console.log("changeinput action : ", action)
            const {form, name, value} = action.payload
            state[form][name] = value;
        }
    },
})
export const {changeinput} = inputSlice.actions
export default inputSlice;