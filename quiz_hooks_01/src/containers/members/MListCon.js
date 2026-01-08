import { useEffect, useState } from "react";
import MListCom from "../../components/member/MListCom";
import { getList } from "../../service/member/member";

function MListcon(){
    const [data, setData] = useState();
    //console.log(getList())
    useEffect(()=>{
        setData(getList())
    },[]);
    return (<>
        <MListCom data={data}/>
    </>)
}
export default MListcon;