import logo from './logo.svg';
import './App.css';
import First from './components/First';

function App() {
  return (
    <div className="App">
      <h1>Welcome to class components</h1>
      <First firstName="Nichole" lastName="King" number={7}/>
      <First firstName="Sean" lastName="King" number={2}/>
      <First firstName="Alex" lastName="King" number={8}/>
      <First firstName="Joshua" lastName="King" number={2}/>
      <First firstName="Angel" lastName="King" number={1}/>
    </div>
  );
}

export default App;
