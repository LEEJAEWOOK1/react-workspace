import { useDispatch, useSelector } from "react-redux";
import HeaderCom from "../components/common/HeaderCom";
import RegCom from "../components/RegCom";
import { changeinput } from "../redux/inputSlice";
import { useRef } from "react";
import { registerThunk } from "../service/authThunk";
import { useNavigate} from "react-router-dom";

const RegCon = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {username, password, role} = useSelector(state=>{
        //console.log("reg con state : ", state)
        return state.input.register;
    })
    const {result, loading, error} = useSelector(state => state.auth)
    const onChange = (e) => {
        const {name, value} = e.target;
        dispatch(changeinput({name:name, value:value, form:"register"}))
    }

    const inputCheck = useRef([])
    const onSubmit = async (e) => {
        e.preventDefault();
        //console.log("reg con e.target : ",e.target)
        const resultThunk = await dispatch(registerThunk({username, password, role}))
        //console.log("resultThunk : ", resultThunk)
        for(let input of inputCheck.current){
            console.log({username, password, role})
            if(input.value === ""){
                alert(input.name+" 필수!")
                input.focus();
                return;
            }
        }
        if(resultThunk.payload === 1){
            alert("회원가입 성공")
            navigate("/login")
        }
    }
    return(<>
        <HeaderCom/>
        <RegCom result={result} loading={loading} error={error} inputCheck={inputCheck} onChange={onChange} onSubmit={onSubmit} username={username} password={password} role={role}/>
    </>)
}
export default RegCon;