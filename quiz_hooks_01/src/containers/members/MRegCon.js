import { useRef, useState } from "react";
import MRegCom from "../../components/member/MRegCom";
import { register } from "../../service/member/member";
import { useNavigate } from "react-router-dom";
const registerInput = {id:"", pwd: "", pwdChk:"", name:"", addr:""}
function MRegCon(){
    const [reg, setReg] = useState(registerInput);
    
    const navigate = useNavigate()
    const inputCheck = useRef([])

    const onChange = (e) => {
        setReg({...reg, [e.target.name]:e.target.value})
    }
    
    const onSubmit = (e) => {
        e.preventDefault(); // 페이지 이동 방지
        for(let input of inputCheck.current){
            //console.log(input)
            if(input.value === ""){
                alert(input.name+" 필수!")
                input.focus();
                return;
            }
        }
        if(inputCheck.current[1].value === inputCheck.current[2].value){
            alert("회원가입 축하")
            const saveData = {...reg}
            delete saveData.pwdChk
            register(saveData)
            navigate("/member/list")
        }else{
            alert("비밀번호 다르다~~~~")
            setReg({...reg, pwd :"", pwdChk:""});
            inputCheck.current[1].focus();
        }
        //console.log(reg)
        /*inputCheck.current.forEach((v, i) => {
            console.log(v," : "+i)
            if(v.value === ""){
                alert(v.name+" 필수!")
                return;
            }
        })*/

       /*const saveData = {...reg}

       delete saveData.pwdChk
       console.log(saveData)
       register(saveData)
       navigate("/member/list")*/
    }
    return (<>
        <MRegCom reg={reg} onChange={onChange} onSubmit={onSubmit} inputCheck={inputCheck}/>
    </>)
}
export default MRegCon;