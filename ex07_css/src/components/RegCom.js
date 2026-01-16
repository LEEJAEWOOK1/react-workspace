import { Link } from "react-router-dom";
import StyleForm from "./common/StyleForm";
import StyleInput from "./common/StyleInput";
import StyleButton from "./common/StyleButton";
import styled from "styled-components";

const AuthBlock = styled.div`
    position: absolute;
    left : 0; top: 0; bottom: 0; right: 0;
`;
const RegBox = styled.div`
    position: absolute;
    width: 360px; min-height: 200px;
    top: 150px; left: calc(50% - 180px);
    background-color: white;
    padding-top: 20px;
    border-radius: 5px;
    .logo-area{
        text-align: center;
        font-weight: bold;
        letter-spacing: 5px; font-size: 20px;
        padding-bottom: 5px;
        width: 50%; margin: 0 auto;
        a{color:chocolate;}
    }
`;
const RegCom = ({result, loading, error, onChange, onSubmit, username, password, role}) => {
    return(<>
     <AuthBlock>
            <RegBox>
                <div className="logo-area">
                    <Link to="/">회원가입</Link>
                </div>
                <StyleForm onSubmit={onSubmit}>
                    <StyleInput type="text" value={username} name="username" onChange={onChange} placeholder="username"/>
                    <StyleInput type="text" value={password} name="password" onChange={onChange} placeholder="password"/>
                    <StyleInput type="text" value={role} name="role" onChange={onChange} placeholder="role"/>
                    <StyleButton width="35%" background={["gray",0.5]}disabled={loading}>REGISTER</StyleButton>
                    {/* 
                    {loading && <p>로그인 중 입니다...</p>}
                    {error && <p>문제 발생 : {error}</p>}
                    {result === 1 && <p>아이디 또는 비번 불일치</p>}
                    */}
                </StyleForm>
            </RegBox>
        </AuthBlock>
    </>)
}
export default RegCom;