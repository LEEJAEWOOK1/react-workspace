import styled from "styled-components"
const colorList = ["red", "skyblue"]
const StyleDiv01 = styled.div`
    font-size : 30px;
    background-color: beige;
`; //div태그를 css설정하겠다
const StyleH1 = styled.h1`
    background-color: ${colorList[0]};
    color : ${colorList[1]};
`;
function Test02(){
   return (<>
    <StyleDiv01>test02</StyleDiv01>
    <StyleH1>test02</StyleH1>
    </>)
}
export default Test02;