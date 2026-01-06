import { useEffect, useState } from "react";
import MListCom from "../../components/member/MListCom";
import { getData } from "../../service/member/member";
import { useNavigate } from "react-router-dom";
function MListCon(){
    const [list, setList] = useState([])
    //console.log(getData())

    useEffect(() => {
        //console.log("useEffect 실행")
        setList(getData())
    }, [])

    const [n, setN] = useState(0);
    const onClickOk = () => {setN(n+1)}
    const onClickNo = (id) => {console.log(id+"랜더링 안됨")}

    const navigate =useNavigate();
    const onDelete = (id) => {
        console.log("/member/delete/ ", id);
        navigate("/member/delete/"+id)
    }
    //onDelete("aaa")
    //list = [{},{},{}]
    return (<>
        {/*console.log("return 랜더링 됨!!!")*/}
        <button onClick={onClickOk}>랜더링</button>
        <button onClick={() => onClickNo("bbbb")}>안됨</button>
        <MListCom list={list} onDelete={onDelete}/>
    </>)    // 그냥 쓰면 함수가 바로 호출이 되기때문에 함수로 묶어줌 () => onClickNo("bbbb")
}
export default MListCon;