import './App.css';
import UserCreate from './components/UserCreate';
// import showTrain from './components/showTrain'
import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1 className='Header'>John Doe Train Reservation </h1>
        <Router className='Head'>
          <Link to='/'>UserCreate</Link>
          <Link to='/showTrain'>showTrain</Link>
          <Routes>
            <Route path='/' element={<UserCreate/>}/>
            {/* <Route path='/showTrain' element={<showTrain/>}/> */}
          </Routes>
        </Router>
    </div>
  );
}

export default App;
