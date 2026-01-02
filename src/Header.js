function Header(props){
    console.log(props)
    return <h2>HEADER 영역<br></br>
            props.test : {props.test}<br></br>
            props.number : {props.number}<br></br>
        </h2>
}
export default Header;