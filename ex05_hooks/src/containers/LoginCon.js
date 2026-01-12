import { useReducer } from "react";
import LoginCom from "../components/LoginCom";
import { initalLogin, initalState, reducer } from "../moduls/member_red";

const LoginCon = () =>{
    const [state, dispatch] = useReducer(reducer,initalState)
    const onChange = (e) => {
        //console.log(e.target)
        dispatch({//type:"LOGIN_INPUT", 
                type: "CHANGE_INPUT",
                value:e.target.value, 
                name:e.target.name,
                form : "login"
        });
    }
    return(<>
    <LoginCom state={state} onChange={onChange}/>
    </>)
}
export default LoginCon;