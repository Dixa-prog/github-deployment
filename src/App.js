// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import StateAndProp from './StateAndProp';

// import Header from './Header';
function App() {
  const [first, setfirst] = useState('first')
  return (
    <div className="App">
      
        <StateAndProp first={first}/>
    </div>
  );
}

export default App;
