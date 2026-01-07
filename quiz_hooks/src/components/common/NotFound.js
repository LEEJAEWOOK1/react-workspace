import { useNavigate } from "react-router-dom";

function NotFound(){
    const navigate = useNavigate();
    return (<>
        <h2>member/없는 경로 페이지는 존재하지 않습니다</h2>
        <button onClick={()=> navigate("/")}>HOME 이동</button>
    </>)
}
export default NotFound;