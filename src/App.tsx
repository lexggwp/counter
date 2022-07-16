import React, {useState} from 'react';
import './App.css';
import Counter from "./Components/Counter";

export type ValuesPropsType = {
  minValue: number,
  maxValue: number
}

function App() {
  const values = {
    minValue: 0,
    maxValue: 5
  }

  const [state, setState] = useState(values.minValue);

  const addNumber = () => state < values.maxValue ? setState(state + 1): true;

  const reset = () => setState(values.minValue);

  return (
    <Counter values={values} addNumber={addNumber} reset={reset} state={state}/>
  );
}

export default App;
