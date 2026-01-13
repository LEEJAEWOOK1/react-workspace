import { useContext, useReducer } from "react";
import LoginCom from "../../components/member/MLoginCom";
import { initalLogin, initalState, reducer } from "../../moduls/member_red";
import { useNavigate } from "react-router-dom";
import { loginCheck } from "../../service/member/member";
import { AuthContext } from "../../store/AuthContext";

const MLoginCon = () =>{
    const [state, dispatch] = useReducer(reducer,initalState)
    const {login} = useContext(AuthContext)
    const onChange = (e) => {
        //console.log(e.target)
        dispatch({//type:"LOGIN_INPUT", 
                type: "CHANGE_INPUT",
                value:e.target.value, 
                name:e.target.name,
                form : "login"
        });
    }

    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({type:"LOADING"})
        //setTimeout(()=>{
            try{
                console.log("login : ", state)
                const result = loginCheck(state.login.id, state.login.pwd)
                console.log("result : ", result)
                if(result === 0){
                    login(state.login.id)
                    navigate("/member/list")
                }
            }catch(e){
                dispatch({type:"ERROR", error:e.toString()})
                return;
            }
            dispatch({type:"FINSHED"})
        //}, 1000)
        
    }

    return(<>
    <LoginCom state={state} onChange={onChange} onSubmit={onSubmit} loading={state.loadding} error={state.error}/>
    </>)
}
export default MLoginCon;