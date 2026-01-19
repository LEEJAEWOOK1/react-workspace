import logo from './logo.svg';
import './App.css';
import Test03 from './components/test/TestCom03';
import { Route, Routes } from 'react-router-dom';
import LoginCon from './containers/LoginCon';
import IndexCon from './containers/IndexCon';
import RegCon from './containers/RegCon';
import ListCon from './containers/ListCon';
import InfoCon from './containers/InfoCon';
import HeaderCom from './components/common/HeaderCom';
import ModifyCon from './containers/ModifyCon';

function App() {
  return (<>
    <Routes>
      <Route element={<HeaderCom/>}>
        <Route path='/' element={<IndexCon />}/>
        <Route path='/login' element={<LoginCon />}/>
        <Route path='/register' element={<RegCon/>}/>
        <Route path='/list' element={<ListCon/>}/>
        <Route path='/info/:username' element={<InfoCon/>}/>
        <Route path='/modify/:username' element={<ModifyCon/>}/>
      </Route>
    </Routes>

  {/* 
    <Test03 test={"안녕하세요"} />
  */}
  </>);
}

export default App;
