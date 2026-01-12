const ReducerCom = ({onDown, state, onClick}) => {
    console.log("state : ", state)
    return (<>
    value : {state.value}<br></br>
    name : {state.name}<br></br>
    <button onClick={onClick}>클릭</button>
    <button onClick={onDown}>onDown</button>
    </>)
}
export default ReducerCom;