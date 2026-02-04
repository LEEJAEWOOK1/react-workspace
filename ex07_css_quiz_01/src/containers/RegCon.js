import { useDispatch, useSelector } from "react-redux";
import HeaderCom from "../components/common/HeaderCom";
import RegCom from "../components/RegCom";
import { changeInput } from "../redux/inputSlice";
import { registerThunk } from "../service/authThunk";
import { useNavigate } from "react-router-dom";

const RegCon = () => {
    const {username, password, role} = useSelector(state => state.input.register);

    const {error, loading} = useSelector(state => {
        console.log("reg con state => ", state)
        return state.auth;
    })
    const dispatch = useDispatch();
    const onChange = (e) => {
        const {name, value} = e.target
        dispatch(changeInput({name, value, form:"register"}))
    }
    const navigate = useNavigate();
    const onSubmit = async (e) => {
        e.preventDefault();
        //console.log("reg submit : ", e.target)

        const formData = new FormData(e.target)
        formData.append("id", 1000) //데이터에 id 추가
        //console.log("formdata : ", formData);
        //const userData = Object.fromEntries(formData.entries())
        const {payload} = await dispatch(registerThunk(formData))
        console.log("payload => ", payload);
        if(payload?.result === 0)
            navigate("/login")
    }
    return (<>
        
        <RegCom error={error} loading={loading} onChange={onChange} onSubmit={onSubmit} username={username} password={password} role={role}/>
    </>)
}
export default RegCon;