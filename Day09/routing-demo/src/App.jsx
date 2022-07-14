import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cities from './components/Cities';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cities/:city" element={<Cities/>}/>
      </Routes>
    </div>
  );
}

export default App;
