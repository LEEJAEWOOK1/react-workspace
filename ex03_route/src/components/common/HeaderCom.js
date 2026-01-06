import { Link, Outlet } from "react-router-dom";

const HeaderCom = () => {
    return(
        <div>
            <header>
                <Link to ="/">HOME</Link> &nbsp;
                <Link to ="/member/list">MEMBER</Link>
                <hr></hr>
            </header>
            <main>
                <Outlet />  
            </main> 
        </div>
    )  //  <Outlet /> : App.js에 Route로 감싸져 있는 것들을 보여준다
       //  <Link to> : 해당 페이지로 넘어가게 한다.(해당 페이지 주소로 변경, header부분은 고정, main부분만 변경)
}
export default HeaderCom;