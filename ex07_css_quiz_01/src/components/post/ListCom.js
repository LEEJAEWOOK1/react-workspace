import { Link } from "react-router-dom";
import styled, {css} from "styled-components";
const ListTitle = styled.div`
    color : brown;
    font-size : 30px;
    width : 200px;
    text-align : center;
    margin : 20px auto;
`;
const DivWrap = styled.div`
    margin : auto;
    width: 70%;
    border-top : 1px solid gray;
`;
const DivContent = styled.div`
    display : flex;
    justify-content : space-between;
    border-bottom : 1px solid gray;
    padding : 15px;
`;
const Div = styled.div`
    width : 10%;
    text-align : center;
    ${props => css`
        ${props.width && `width : ${props.width};`}
        ${props.fontWeight && `font-weight : ${props.fontWeight};`}
        ${props.textAlign && `text-align : ${props.textAlign};`}
    `}
`;
const ListCom = ({onLiked, onInfo, data}) => {
    
    return(<>
          <ListTitle>게 시 글 목 록</ListTitle>
          <DivWrap>
            <DivContent>
                <Div fontWeight="bold">번호</Div>
                <Div fontWeight="bold" width="40%">제목</Div> 
                <Div fontWeight="bold" width="15%">작성자</Div>
                <Div fontWeight="bold" width="10%">조회수</Div>  
                <Div fontWeight="bold" width="15%">작성일</Div>    
                <Div fontWeight="bold" width="10%">좋아요</Div>    
                <Div fontWeight="bold" width="10%">좋아요 수</Div>    
            </DivContent>
            {data && data.map(d => (
                <DivContent key={d.id}>
                    <Div>{d.id}</Div>
                    <Div width="40%" onClick={()=>onInfo(d.id)}>{d.title}</Div>
                    <Div width="15%">{d.username}</Div>
                    <Div width="10%">{d.count}</Div>
                    <Div width="15%">{new Date(d.createdAt).toLocaleDateString()}</Div>
                    <Div width="10%" onClick={() => onLiked({postId:d.id, liked:d.liked})}>{d.liked ? "❤" : "🤍"}</Div>
                    <Div width="10%">{d.likedCount}</Div>
                </DivContent>
            ))}
            <Div width="95%" textAlign="right">
                <Link to="/post/register">글 등록</Link>
            </Div>
          </DivWrap>  
    </>)
}
export default ListCom;