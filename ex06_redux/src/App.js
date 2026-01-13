import logo from './logo.svg';
import './App.css';
import ReduxCon from './redux-basic/ReduxCon';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import ListPage from './pages/ListPage';
import LoginPage from './pages/LoginPage';
import RegPage from './pages/RegPage';




function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<IndexPage/>}/>
      <Route path="/list" element={<ListPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegPage/>}/>
    </Routes>
    {/* <ReduxCon/> */}
    </>
  );
}

export default App;
