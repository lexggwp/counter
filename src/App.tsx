import React, {useState} from 'react';
import './App.css';
import Counter from "./Components/Counter";
import SetupCounter from "./Components/SetupCounter";
import s from './Components/Counter.module.css';

function App() {


    const [minValue, setMinValue] = useState(1);
    const [maxValue, setMaxValue] = useState(5);
    const [state, setState] = useState<number>(0);
    const [error, setError] = useState<string>('Set a number');

    const setMin = (minVal: number) => {
        setMinValue(minVal);
        if (minVal >= maxValue || minVal < 0) {
            setError('Incorrect values!')
        } else {
            setError('Set a number');
        }

    }
    const setMax = (maxVal: number) => {
        setMaxValue(maxVal);
        if (maxVal <= minValue || maxVal < 0) {
            setError('Incorrect values!')
        } else {
            setError('Set a number');
        }
    }
    const setButton = () => {
        setState(minValue);
        setError('');
    }

    const addNumber = () => state < maxValue ? setState(state + 1) : true;

    const reset = () => setState(minValue);

    return (
        <div className={s.counterMain}>
            <SetupCounter
                     error={error}
                     minNumber={minValue}
                     maxNumber={maxValue}
                     setButton={setButton}
                     setMaxValue={setMax}
                     setMinValue={setMin}
            />
            <Counter
                     error={error}
                     minValue={minValue}
                     maxValue={maxValue}
                     addNumber={addNumber}
                     reset={reset}
                     state={state}
            />
        </div>

    );
}

export default App;
