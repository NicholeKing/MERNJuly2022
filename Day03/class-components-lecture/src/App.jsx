import logo from './logo.svg';
import './App.css';
import First from './components/First';

function App() {
  return (
    <div className="App">
      <h1>Welcome to class components</h1>
      <First firstName="Nichole"/>
      <First firstName="Sean"/>
      <First firstName="Alex"/>
      <First firstName="Joshua"/>
      <First firstName="Angel"/>
    </div>
  );
}

export default App;
