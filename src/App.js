
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className='content'>
       <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
       </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
