import { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Form from './components/Form';
import Results from './components/Results';

function App() {
  const [allCharacters, setAllCharacter] = useState([]);
  const addChar = person => {
    setAllCharacter([...allCharacters, person]);
  }
  return (
    <div className="App">
      <Form newChar={addChar}/>
      <Results allChars={allCharacters}/>
    </div>
  );
}

export default App;
