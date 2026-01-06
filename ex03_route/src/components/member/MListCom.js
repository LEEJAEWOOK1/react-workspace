import { Link, useNavigate } from "react-router-dom";
function MListCom({list, onDelete}){
    const navigate = useNavigate();  //navigate: 특정 경로로 이동시켜준다.
    const indexBtn = () => navigate("/");
    const beforeBtn = () => navigate(-1);

    if(list.length !== 0)
        //console.log("list 0 : ", list[0])

    //console.log("list: ", list)
    return (<>
        {list && list.map(data => { //list가 있을 때만 map 실행
            return <div key={data.id}>
                <span>{data.id}</span>,
                <span>{data.pwd}</span>,
                <span>
                    <Link to={"/member/one?id=" + data.id}>
                        {data.name}
                    </Link>
                </span>,
                <span>{data.addr}</span>
                <button onClick={()=>{onDelete(data.id)}}>삭제</button>
            </div>
        })}
        
        <hr></hr>
        <Link to="/member/one?id=1">1.회원 목록</Link><br></br>
        <Link to="/member/one?id=2">2.회원 목록</Link><br></br>
        <Link to="/member/one?id=3">3.회원 목록</Link>
        <hr></hr>
        <Link to="/member/update/2">2번 업데이트</Link>
        <hr></hr>
        <div onClick={indexBtn}>index 이동</div>
        <button onClick={beforeBtn}>이전</button>
    </>)    // ?:query string(데이터 전달), /: 경로처럼 데이터 전달
}
export default MListCom;