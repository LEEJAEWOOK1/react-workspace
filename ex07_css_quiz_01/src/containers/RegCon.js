import { useDispatch, useSelector } from "react-redux";
import HeaderCom from "../components/common/HeaderCom";
import RegCom from "../components/RegCom";
import { changeInput } from "../redux/inputSlice";

const RegCon = () => {
    const {username, password, role} = useSelector(state => state.input.register);
    const dispatch = useDispatch();
    const onChange = (e) => {
        const {name, value} = e.target
        dispatch(changeInput({name, value, form:"register"}))
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log()
    }
    return (<>
        <HeaderCom/>
        <RegCom onChange={onChange} onSubmit={onSubmit} username={username} password={password} role={role}/>
    </>)
}
export default RegCon;