function Child(props){
    console.log(props)
    const [a,b] = props.children
    return (<>
        a : {a}, b : {b}<br />
        n : {props.n}<br></br>
        n : {props.children}<br></br>
    </>)
}
export default Child;