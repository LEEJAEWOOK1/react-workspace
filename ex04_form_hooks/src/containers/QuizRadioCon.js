import { useState } from "react";
import QuizRadioCom from "../components/QuizRadioCom";

const initalRadio = [
    {key:4, value:'10대', name: 'age', isChecked : true},
    {key:5, value:'20대', name: 'age', isChecked : false},
    {key:6, value:'30대', name: 'age', isChecked : false},
]
const QuizRadioCon = () => {
    const [age, setAge] = useState(initalRadio)
    const onChange = (key) => {
        //console.log("key : ", key)
        //const updateAge = age.map(data => ({...data, isChecked: key === data.key}))
        const updateAge = age.map(data => {
            console.log("data : ", data);
            console.log("key : ", key);
            console.log("key === data.key : ", key === data.key);
            return {...data, isChecked: key === data.key}   // 내가 선택한 키와 데이터 키 비교
    });
        setAge(updateAge);
    }
    return (<>
        <QuizRadioCom age={age} onChange={onChange}/>
        </>)
}
export default QuizRadioCon;