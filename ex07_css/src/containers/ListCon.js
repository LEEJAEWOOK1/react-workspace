import { useDispatch, useSelector } from "react-redux";
import HeaderCom from "../components/common/HeaderCom";
import ListCom from "../components/ListCom"
import { useEffect } from "react";
import { memberThunk } from "../service/authThunk";

const ListCon = () => {
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(memberThunk())
    },[dispatch])
    const memberList = useSelector((state)=>{
        //console.log("list en state : ", state)
        return state.memberData.data;
    })
    //console.log("listcon m list : ", memberList)
    return (<>
        <HeaderCom/>
        <ListCom list={memberList}/>
    </>)
}
export default ListCon;