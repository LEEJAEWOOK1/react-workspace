import { useContext, useEffect, useReducer, useState } from "react";
import ListCom from "../components/ListCom";
import {getList} from "../service/member";
import { initalData, initalState, reducer } from "../moduls/member_red";
import { TestContext } from "../store/TestContext";
const ListCon = () => {
    /*try{
        const data = JSON.parse('{"test":111}')
        console.log("data : ",data)
    }catch(err){
        console.log("문제 발생")
    }
    console.log("다음 문장 실행")
    */

    const [state, dispatch] = useReducer(reducer, initalState);

    const {data} = useContext(TestContext)  //저장소(TestContext)에 있는 데이터를 갖고 와서 공유해라

    //const [user, setUser] = useState(null);
    //state : {data : null}
    useEffect (()=>{
        try{
            dispatch({type:"LOADING"})
            //setTimeout(()=>{
                //console.log("2초 후 실행")
                const data = getList();
                //data =[{},{},{}]
                //setUser(data)
                dispatch({type:"LIST", data})
                dispatch({type:"FINISHED"})
            //},2000)
            //throw new Error("에러 발생")
        }catch(e){      //catch(error) -> error: 발생한 에러를 담는 변수(이름은 아무거나 가능)
            console.log(e)
            console.log(e.toString())    
            dispatch({type:"ERROR", msg: e.toString})
        }
    },[])
    //console.log(state)
    return (<>
        data.num : {data.number}<br></br>
        <ListCom error={state.error} data={state.data} loading={state.loadding}/>
    </>)
}
export default ListCon;