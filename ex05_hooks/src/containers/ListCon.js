import { useEffect, useReducer, useState } from "react";
import ListCom from "../components/ListCom";
import {getList} from "../service/member";
import { initalData, initalState, reducer } from "../moduls/member_red";
const ListCon = () => {
    /*try{
        const data = JSON.parse('{"test":111}')
        console.log("data : ",data)
    }catch(err){
        console.log("문제 발생")
    }
    console.log("다음 문장 실행")
    */

    //const [user, setUser] = useState(null);
    const [state, dispatch] = useReducer(reducer, initalState);
    //state : {data : null}
    useEffect (()=>{
        try{
            dispatch({type:"LOADING"})
            //setTimeout(()=>{
                console.log("2초 후 실행")
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
        <ListCom error={state.error} data={state.data} loading={state.loadding}/>
    </>)
}
export default ListCon;