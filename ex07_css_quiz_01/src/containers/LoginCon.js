import { useDispatch, useSelector } from "react-redux";
import HeaderCom from "../components/common/HeaderCom";
import LoginCom from "../components/LoginCom";
import { changeInput } from "../redux/inputSlice";
import { loginThunk } from "../service/authThunk";
import { useNavigate } from "react-router-dom";
const LoginCon = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {username, password} = useSelector(state => {
        //console.log(state)
        return state.input.login;
    })
    const {isLoggedIn, result, loading, error} = useSelector(state => {
        console.log("auth state : ", state)
        return state.auth;
    })
    const onChange = (e) => {
        //console.log(e.target)
        //console.log(e.target.name)
        //console.log(e.target.value)
        const {name, value} = e.target
        dispatch(changeInput({name, value, form:"login"}))
    }
    const onSubmit = (e) => {
        e.preventDefault();
        //console.log("state username : ", username)
        //console.log("state password : ", password)
        dispatch(loginThunk({username, password}));
    }
    if(isLoggedIn){
        navigate("/")
    }
    return (<>
        
        <LoginCom loading={loading} error={error} result={result} onSubmit={onSubmit} onChange={onChange} username={username} password={password} />
    </>)
}
export default LoginCon;