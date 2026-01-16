import {useDispatch, useSelector} from "react-redux";
import HeaderCom from "../components/common/HeaderCom"
import LoginCom from "../components/LoginCom";
import inputSlice from "../redux/inputSlice";
import { loginThunk } from "../service/authThunk";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/authSlice";
import { useEffect } from "react";

const LoginCon = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {username, password} = useSelector(state => {
        //console.log("login state : ", state)
        return state.input.login;
    })
    const {result, loading, error} = useSelector(state => state.auth)
    const onChange = (e) => {
        const {name, value} = e.target;
        dispatch(inputSlice.actions.changeinput({name, value, form:"login"}))
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        //console.log("username:", username);
        //console.log("password:", password);
        const resultThunk = await dispatch(loginThunk({username, password}))
        console.log("resultThunk : ", resultThunk)
        if(resultThunk.payload.result === 0){
            dispatch(login({username:username}))
            navigate("/")
        }
    }
    return (<>
        <HeaderCom/>
        <LoginCom result={result} loading={loading} error={error} onSubmit={onSubmit} onChange={onChange} username={username} password={password}/>
    </>)    
}
export default LoginCon;