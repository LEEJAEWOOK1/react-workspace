import { useReducer } from "react";
import ReducerCom from "../components/ReducerCom";
const reducer = (state, action) => {
    console.log("setNum state : ", state)
    console.log("setNum action : ", action)
    console.log("setNum action : ", action.type)
    switch(action.type){
        case "up" : return {...state, value:state.value + 10};
        case "down" : return {...state, value:state.value - 5};
        default : return state;
    }
    //return state + 1;  // state의 대한 값을 반환한다.(state의 값 )
}
const initalState = {value : 0, name : "홍길동"}
const ReducerCon = () => {
    const [state, dispatch] = useReducer(reducer, initalState); // (내가 사용하고자 하는 함수이름, state의 초기값), 직접 함수를 만든다.(dispatch로 호출)
    const onClick = () => {dispatch({type:"up"});} //dispatch(action): ()에는 action이 들어감
    const onDown = () => {dispatch({type:"down"});}
    return (<>
    <ReducerCom onDown={onDown} state={state} onClick={onClick}/>
    </>)
}
export default ReducerCon;