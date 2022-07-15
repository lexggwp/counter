import React, {useState} from 'react';
import './App.css';
import Counter from "./Components/Counter";

function App() {

  const [state, setState] = useState(0);
  const incNumber = () => state < 5 ?setState(state + 1): true;

  const reset = () => {
    setState(0)
  }
  return (

    <Counter reset={reset} inc={incNumber} state={state}/>

  );
}

export default App;
