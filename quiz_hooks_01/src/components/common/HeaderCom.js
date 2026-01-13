import { Link, Outlet } from "react-router-dom";

function HeaderCom({onLogout, auth}){
    console.log("test : ", sessionStorage.getItem("test"))
    return (<>
        <header>
            <Link to="/">HOME</Link> &nbsp;
            <Link to="/member/list">MEMBER</Link> &nbsp;
            <Link to="/member/login">로그인</Link> &nbsp;
            <Link to="/member/register">회원가입</Link> &nbsp;
            <hr></hr>
        </header>
        <main>
            <Outlet/>
        </main>
        
        {/* <Link to="/">HOME</Link> &nbsp;
        <Link to="/list">목록</Link> &nbsp;
        {auth.isLoggedIn?(
            <>
            <Link to="/" onClick={onLogout}>로그아웃</Link> &nbsp;
            <span>{auth.user}님 로그인</span>
            </>
        ):(<>
            <Link to="/login">로그인</Link> &nbsp;
            <Link to="/register">회원가입</Link> &nbsp;
            </>
        )}
        
        <Link to="/context">context</Link> &nbsp;
        <hr></hr>*/}
    </>)  
}
export default HeaderCom;