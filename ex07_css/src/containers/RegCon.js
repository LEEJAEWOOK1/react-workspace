import { useDispatch, useSelector } from "react-redux";
import HeaderCom from "../components/common/HeaderCom";
import RegCom from "../components/RegCom";
import { changeinput } from "../redux/inputSlice";

const RegCon = () => {
    const dispatch = useDispatch();
    const {username, password, role} = useSelector(state=>{
        console.log("reg con state : ", state)
        return state.input.register;
    })
    const onChange = (e) => {
        const {name, value} = e.target;
        dispatch(changeinput({name:name, value:value, form:"register"}))
    }
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return(<>
        <HeaderCom/>
        <RegCom onChange={onChange} onSubmit={onSubmit} username={username} password={password} role={role}/>
    </>)
}
export default RegCon;