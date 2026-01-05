import { useState } from "react";
import Quiz03StoreCom from "../components/Quiz03StoreCom";

function Quiz03StoreCon(){
    const [store, setStore] = useState({msg : "", inData : 0, outData : 0})
    console.log(store)
    //const [num, setNum] = useState(0)
    //setNum(num+1)
    //store = {msg:'', inData: 0, outData: 0}
    //store.inData => 0 => store.inData = store.inData + 1
    const inBtn = () => {
          //store.msg="값처리"
          const num = store.inData;
          setStore({msg : "어서오세요", inData : num + 1, outData : store.outData}) 
    } 
    const outBtn = () => {
        if(store.inData - store.outData === 0)
            alert("나갈 손님이 없습니다!!!")
        else
            setStore({...store, msg : "안녕히가세요", outData : store.outData + 1}) //깊은복사
    } 
    return(<>
    <Quiz03StoreCom inBtn={inBtn} outBtn={outBtn} msg={store.msg} inData={store.inData} outData={store.outData}/>
    </>) // useState() 변수개수가 적으면 낱개로 넘겨줘도 괜찮음(ex)store.msg)
}
export default Quiz03StoreCon;