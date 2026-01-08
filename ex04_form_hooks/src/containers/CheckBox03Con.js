import { useState } from "react";
import CheckBox03Com, {CheckComponent} from "../components/CheckBox03Com";

const initalCheckboxs = [
    {key:1, label:"게임", isChecked : false},
    {key:2, label:"멍", isChecked : true},
    {key:3, label:"잠", isChecked : false},
]
const CheckBox03Con = () => {
    const [hobby, setHobby] = useState(initalCheckboxs)
    const [isChecked, setIsChecked] = useState(true)
    const onChange = () => {
        setIsChecked(!isChecked)
    }
    const onChangeHobby = (e) => {
        //console.log(e.target)
        //console.log(hobby[0]['key'] == e.target.id)

        const updateHobby = hobby.map(data => (
            data.key === e.target.id? {...data, isChecked:!data.isChecked} : data
        ));  // 데이터 키와 내가 선택한 키 비교
        setHobby(updateHobby);

        /*
        const arr = [...initalCheckboxs];
        if(e.target.id === "1"){
            //const arr = [...initalCheckboxs];
            arr[0]["isChecked"]= !arr[0]["isChecked"]
            //setHobby(arr)
        }else if(e.target.id === "2"){
            //const arr = [...initalCheckboxs];
            arr[1]["isChecked"]= !arr[1]["isChecked"]
            //setHobby(arr)
        }else if(e.target.id === "3"){
            //const arr = [...initalCheckboxs];
            arr[2]["isChecked"]= !arr[2]["isChecked"]
            //setHobby(arr)
        }
        setHobby(arr)
        */
    }
    return(<>
        <CheckComponent onChangeHobby={onChangeHobby} hobby={hobby}/>
        <hr></hr>
        <CheckBox03Com onChange={onChange} isChecked={isChecked}/>
        </>)
}
export default CheckBox03Con;