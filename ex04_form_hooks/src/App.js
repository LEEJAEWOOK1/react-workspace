import logo from './logo.svg';
import './App.css';
import Input01Con from './containers/Input01Con';
import Input02Con from './containers/Input02Con';
import CheckBox03Con from './containers/CheckBox03Con';
import QuizRadioCon from './containers/QuizRadioCon';

function App() {
  return (
    <>
      <QuizRadioCon/>
      <hr></hr>
      <CheckBox03Con/>
      <hr></hr>
      <Input02Con/>
      <Input01Con/>
    </>
  );
}

export default App;
