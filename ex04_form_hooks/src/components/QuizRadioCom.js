const QuizRadioCom = ({age, onChange}) => {
    return (<>
        {age.map(data => <span key={data.key}>
            <label htmlFor={data.key}>{data.value}</label>
            <input id={data.key} type="radio" onChange={() => onChange(data.key)} name={data.name} value={data.value} checked={data.isChecked}/>
        </span>)}
        </>)
}
export default QuizRadioCom;