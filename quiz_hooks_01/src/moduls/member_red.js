const initalState = {
    login : {id:"", pwd: ""},
    register : {id:"", pwd:"", name:"", addr:""},
    data : null,
    loadding : false,
    error : null
}

const reducer = (state, action) => {
    switch(action.type){
        case "REG_INPUT" :
            return {...state, [action.name] : action.value};
        case "LOADING" : return {...state, loadding:true, error:null};
        case "FINISHED" : return {...state, loadding:false, error:null};
        case "ERROR" : return {...state, loadding:false, error:action.msg}
        default :  return state;
    }
}
export {reducer, initalState}