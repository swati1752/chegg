import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './About';

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
    <Route path='/' element={<Navbar/>} ></Route>
    <Route path='/about' element={<About/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
