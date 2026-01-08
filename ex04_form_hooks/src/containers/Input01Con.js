import { useState } from "react";
import Input01Com from "../components/Input01Com";

const Input01Con = () => {
    const [input, setInput] = useState(
        {username:"연습", addr : ""}
    )
    const onChange222 = (e) => {
        //console.log(e)
        //console.log(e.target)
        //console.log(e.target.value)
        console.log(e.target.name)
        //setInput({username: e.target.value, addr : ""})
        setInput({...input, [e.target.name]: e.target.value})
    }
    const onSubmit01 = (e) => {
        e.preventDefault(); //페이지 이동을 막아준다.(e:event)
        //alert("실행???")
        console.log("사용자 입력값")
        console.log(input)
    }
    return (<>
        <Input01Com input={input} onSubmit01={onSubmit01} onChange2={onChange222}/>
    </>)
}
export default Input01Con;