const Input01Com = ({input, onChange2, onSubmit01}) => {
    return (<>
    <form onSubmit={onSubmit01} action="https://www.naver.com">
        <input type="text" value={input.username} name="username" onChange={onChange2}/><br></br>
        <input type="text" value={input.addr} name="addr" onChange={onChange2}/><br></br>
        <input type="submit" value="input"/>
        <input type="button" value="input"/>
        <button type="button">btn</button>
        <button type="submit">btn</button>
        <button>btn</button>
    </form>
    </>)  //onchange: 입력을 하면 실행한다. submit: action 동작함(input, button 둘다 가능), button: action 동작 안함, type이 없으면 submit과 같다.
}
export default Input01Com;