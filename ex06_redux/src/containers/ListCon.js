import { useEffect } from "react";
import ListCom from "../components/ListCom";
import {useDispatch, useSelector} from "react-redux";
import { getList } from "../service/member";
import { list } from "../redux/memberDataSlice";
import { memberThunk } from "../service/memberThunk";

const ListCon = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(memberThunk("mem"))
        /*
        const getMList = async() => {
            const res = await getList();
            console.log("list con list : ", res)
            //console.log("list con res.json() : ", res.json())
            const data = await res.json();
            console.log("list con data : ", data)
            //memberDataSlice.actions.list(mlist)
            dispatch(list(data))
        }
        getMList();
        */
    },[dispatch])
    const memberList = useSelector((state)=>{
        //console.log("listen state : ", state)
        return state.memberData.data;
    })
    const {loading, error} = useSelector((state)=>{
        //console.log("listen state : ", state)
        return state.memberData;
    })
    //console.log("listcon m list : ", memberList)
    return (<>
        <ListCom loading={loading} error={error} list={memberList}/>
    </>)
}
export default ListCon;