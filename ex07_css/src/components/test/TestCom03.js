import StyleButton from "./BtnCom03";

const Test03 = (props) => {
    
    return (<>
        <StyleButton>Test03</StyleButton><br></br>
        <StyleButton width="100px" background={["255,0,0",0.5]}>로그인</StyleButton>
    </>) // <StyleButton width="100px">Test03</StyleButton> : props로 전달받아 설정
}
export default Test03;