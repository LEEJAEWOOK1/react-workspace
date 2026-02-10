import {createSlice} from "@reduxjs/toolkit"

const initialState = {
        login : {username:"", password:""},
        register : {username:"", password:"", role:"", file:null},
        modify : {username:"", password:"", role:"", fileName: ""}
    }
const inputSlice = createSlice({
    name : "input",
    initialState : initialState,
    reducers : {
        changeInput : (state, action) => {
            //console.log({...state})
            //console.log(action)
            //state[action.payload.form][action.payload.name] = action.payload.value
            const {form, name, value} = action.payload
            state[form][name] = value
        },
        setModifyData : (state, action) => {
            //console.log("action : ", action)
            state.modify = action.payload;
        },
        initInput : (state) => initialState
    }
})
//inputSlice.actions.changeInput()
//changeInput()
export const {changeInput, setModifyData, initInput} = inputSlice.actions;
export default inputSlice;