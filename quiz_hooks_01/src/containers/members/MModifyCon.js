import { useNavigate } from "react-router-dom";
import MModifyCom from "../../components/member/MModifyCom";

function MModifyCon (){
    const navigate = useNavigate();
    const onModify = () => {
        navigate("/membere/modify")
    }
    return(<>
        <MModifyCom/>
    </>)
}
export default MModifyCon;