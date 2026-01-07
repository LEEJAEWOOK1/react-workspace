import { useEffect, useState } from "react";
import MListCom from "../../components/member/MListCom";
import { getData } from "../../service/member/member";

function MListCon(){
    const [list, setList] = useState([])
    //console.log(getData())

    useEffect(() => {
        setList(getData())  //data 가져와 setList 저장
    }, [])
    return (<>
        <MListCom list={list}/>
    </>)
}
export default MListCon;