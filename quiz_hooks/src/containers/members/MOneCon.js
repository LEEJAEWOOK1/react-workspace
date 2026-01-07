import { useNavigate, useSearchParams } from "react-router-dom";
import MOneCom from "../../components/member/MOneCom";
import { useEffect, useState } from "react";
import { getOne } from "../../service/member/member";

function MOneCon(){
    const [params] = useSearchParams(); // ?로 전달된 값 읽기
    //console.log(getOne(params.get("id")))
    const[user, setUser] = useState({})
    useEffect(()=>{
        setUser(getOne(params.get("id")))
    },[params])
    
    const navigate = useNavigate();
    const onDelete = (id) => {
        //console.log("/member/delete/ ", id);
        navigate("/member/delete/"+id) // delete 페이지로
        alert("삭제되었습니다")
    }
    return (<>
        <MOneCom user={user} onDelete={onDelete}/>
    </>)
}
export default MOneCon;