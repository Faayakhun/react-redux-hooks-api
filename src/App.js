import './App.css';
import Todos from './components/Todos'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1 className='titleText'>Simple Todos using Redux</h1>
      <Todos />
    </div>
  );
}

export default App;
