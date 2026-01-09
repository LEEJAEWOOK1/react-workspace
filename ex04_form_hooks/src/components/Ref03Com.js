function Ref03Com ({number, onRef, onState}) {
    return (<>
        number : {number.current}<br></br>
        <button onClick={onRef}>ref</button>
        <button onClick={onState}>랜더링</button>
    </>) // current: 현재 값을 꺼내온다. onRef: 랜더링은 되지 않지만 연산을 하고 그 값을 가지고 있는다.
}
export default Ref03Com;