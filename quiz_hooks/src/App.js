import logo from './logo.svg';
import './App.css';
import MDeletePage from './pages/member/MDeletePage';
import MListPage from './pages/member/MListPage';
import MOnePage from './pages/member/MOnePage';
import HeaderCom from './components/common/HeaderCom';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import NotFound from './components/common/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route element={<HeaderCom/>}>
          <Route path="/" element={<IndexPage/>}/>
          <Route path="/member">
            <Route path="delete/:username" element={<MDeletePage/>}/>
            <Route path="list" element={<MListPage/>}/>
            <Route path="one" element={<MOnePage/>}/>
          </Route>
        </Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </>
  );
}

export default App;
