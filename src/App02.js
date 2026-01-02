import logo from './logo.svg';
import './App.css';
import Test3 from './aaa';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Child from './Child';
//addEventListener(이벤트, 함수이름)
function App() {
  const num = 1000;
  //console.log("return값이 화면에 표현되는 값")
  const click = () => {
    alert('click event');
  }
  const str1="내용1";
  const str2="내용2";
  return (
    <>
      <Child n="n전달">
        {"내용전달"}{str1}{str2}
      </Child><hr></hr>
      num : {num}
      <Header test="연습중" number={num} />
      <hr />
      <Nav name="홍길동" addr="산골짜기" />
      <hr />
      <Main tel="전화번호" nick="도적" myClick={click}/>
      <div>내용 바꾸기</div>
      <Test3 />
    </>
  );
}

export default App;
