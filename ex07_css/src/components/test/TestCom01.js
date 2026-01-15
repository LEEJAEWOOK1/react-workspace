import "../../styles/test.css"
function Test01(){
    //font-size => fontSize
    const style = {color : "blue", fontSize : "30px"}
    return (<>
        <div style={style}>test01</div>
        <div style={{color : "red"}}>test01</div> 
        <div id="test_id" className="test">test01</div>
    </>)// 직접적으로 style 주고 싶으면 {}를 넣어야 됨({{ }}), class=>className
}
export default Test01;