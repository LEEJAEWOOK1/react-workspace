import { useEffect, useState } from "react";
import MListCom from "../../components/member/MListCom";
import { getList } from "../../service/member/member";

function MListcon(){
    const [data, setData] = useState();
    //console.log(getList())
    useEffect(()=>{
        /*
        const getData = async() => { //  비동기 방식
            const res = await getList() //await: 데이터가 들어올 때까지 기다려 주겠다.
            console.log("res : ", res)
            const data = await res.json(); // res.json을 통해서 데이터를 꺼내온다
            console.log("data : ", data)
            setData(data) //데이터 저장
        }
        getData();
        */
        setData(getList())
    },[]);
    return (<>
        <MListCom data={data}/>
    </>)
}
export default MListcon;