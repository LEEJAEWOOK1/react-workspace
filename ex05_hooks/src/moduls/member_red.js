const initalState = {
    login : {id:"", pwd: ""},
    register : {id:"", pwd:"", name:"", addr:""},
    data : null,
    loadding : false,
    error : null
}
export const initalLogin = {id:"", pwd: ""}
export const initalReg = {id:"", pwd:"", name:"", addr:""}
export const initalData = {data : null}
//{type:"CHANGE_INPUT", value:e.target.id, name:e.target.name, form:"login"}
const reducer = (state, action) => {
    // console.log(state)
    //console.log(action)
    switch(action.type){
        case "LOGIN_INPUT" : 
            return {...state, [action.name] : action.value};
        case "REG_INPUT" : 
            return {...state, [action.name] : action.value};
        case "LIST" : 
            return {...state, data : action.data};
            /*
            State = {
                login : {id:"", pwd: ""},
                register : {id:"", pwd:"", name:"", addr:""},
                data : null
            } 
    */
        case "CHANGE_INPUT" : 
        /*
        dispatch({ 
                type: "CHANGE_INPUT",
                value:e.target.value(aaa),  주소 
                name:e.target.name(id),     addr
                form : "login"              register
        });
         */
            return {...state, [action.form] : {...state[action.form], [action.name]:action.value}};         // login, register      login, register     id : aaa, addr:주소
        case "LOADING" : return {...state, loadding:true, error:null};
        case "FINISHED" : return {...state, loadding:false, error:null};
        case "ERROR" : return {...state, loadding:false, error:action.msg}
        default :  return state;
    }
    //return state;
}
export {reducer, initalState}