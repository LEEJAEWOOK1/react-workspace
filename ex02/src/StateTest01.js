import { useState } from "react";
function StateTest01(){
    const [num , setNum] = useState(0) //무언가 변경되면 리렌더링(함수 전체 다시 실행)
    //let num = 0;
    //let str = "안녕하세요";
    const [str, setStr] = useState("안녕")
    console.log("start : "+num)
    const click = () => {
        console.log("click : ", num);
       //num = num + 1;
       setNum(num + 1)
    }
    const click2 = () => {
        //str = "반갑"
        setStr("반갑")
    }
    console.log("end : "+num)
    return (<>
        str : {str}<br></br>
        <button onClick={click2}>클릭str</button><br></br>
        num : {num}<br></br>
        <button onClick={click}>클릭</button>
    </>)
}
export default StateTest01;