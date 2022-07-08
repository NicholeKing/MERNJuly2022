import logo from './logo.svg';
import './App.css';
import First from './components/First';
import { useState } from 'react';

const darkMode = {
  backgroundColor: "dimgrey",
  color: "ghostwhite",
  padding: "10px"
}

const lightMode = {
  backgroundColor: "white",
  color: "black",
  padding: "10px"
}

function App() {
  const [light, setLight] = useState(true);
  const switchLight = () => setLight(!light);
  return (
    <div className="App" style={light ? lightMode : darkMode}>
      <h1>Welcome to functional components</h1>
      <button onClick={switchLight}>{ light ? "Switch to Dark Mode" : "Switch to Light Mode"}</button>
      <First firstName="Nichole" lastName="King" number={7}/>
      <First firstName="Sean" lastName="King" number={2}/>
      <First firstName="Alex" lastName="King" number={8}/>
      <First firstName="Joshua" lastName="King" number={2}/>
      <First firstName="Angel" lastName="King" number={1}/>
    </div>
  );
}

export default App;
