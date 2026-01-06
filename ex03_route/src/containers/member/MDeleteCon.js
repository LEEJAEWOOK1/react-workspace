import { useNavigate, useParams } from "react-router-dom";
import { memberDelete } from "../../service/member/member";
import { useEffect } from "react";

function MDeleteCon(){
    const params = useParams(); // /로 전달된 값을 읽는 router hook
    console.log("del con params : ", params)
    memberDelete(params.username);
    const navigate = useNavigate();
    useEffect(()=>{     //렌더링(화면 그리기) 이후에 실행되어야 할 작업을 처리하는 Hook
        navigate("/member/list")
    })
    
    return null;
}
export default MDeleteCon;