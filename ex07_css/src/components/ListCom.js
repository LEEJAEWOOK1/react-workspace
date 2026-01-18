import styled from "styled-components";

/*const ListBox = styled.div`
  padding-top: 100px; /* header 가림 방지 */
// `;
const ListBox = styled.div`
    position: absolute;
    width: 360px; min-height: 200px;
    top: 150px; left: calc(50% - 180px);
    background-color: white;
    padding-top: 20px;
    .logo-area{
        text-align: center;
        font-weight: bold;
        letter-spacing: 5px; font-size: 20px;
        padding-bottom: 5px;
        width: 50%; margin: 0 auto;
        color:chocolate;
    }
`;
const Table = styled.table`
    width: 360px;
    margin: 0 auto;
    border-collapse: collapse;
    
`;
const Thead = styled.thead`
    tr {
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
  }
`;
const Tbody = styled.tbody`
    tr {
    
    border-bottom: 1px solid gray;
  }
`;
const Th = styled.th`
  padding: 8px 0;
`;
const Td = styled.td`
  padding: 8px 0;
  text-align: center;
`;
const ListCom = ({list}) => {
    return (<>
    <ListBox>
        <div className="logo-area">
                <h2>회원목록</h2>
        </div>
        <Table>
            <Thead>
                <tr><Th>아이디</Th><Th>비밀번호</Th><Th>ROLE</Th></tr>
            </Thead>
            <Tbody>
                {list && list.map(d=>
                    <tr key={d.username}>
                        <Td>{d.username}</Td>
                        <Td>{d.password}</Td>
                        <Td>{d.role}</Td>
                    </tr>
                )}
            </Tbody>
        </Table>
    </ListBox>
    </>)
}
export default ListCom;