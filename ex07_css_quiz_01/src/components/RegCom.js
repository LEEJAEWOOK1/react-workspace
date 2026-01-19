import StyledButton from "./common/StyleButton";
import { StyleContentBlock, StyleContentWrap } from "./common/StyleContent";
import StyleForm from "./common/StyleForm";
import StyledInput from "./common/StyleInput";
import { ProductTitle } from "./common/StyleProduct";

const RegCom = ({onChange, onSubmit, username, password, role}) => {
    return (<>
    
            <ProductTitle>회 원 가 입</ProductTitle>
            <StyleForm onSubmit={onSubmit} width ="30%">
                <StyledInput name="username" value={username} onChange={onChange} placeholder="username"/>
                <StyledInput name="password" value={password} onChange={onChange} placeholder="password"/>
                <StyledInput name="role" value={role} onChange={onChange} placeholder="role"/>
                <StyledButton>회원 가입</StyledButton>
            </StyleForm>
        
    </>)
}
export default RegCom;