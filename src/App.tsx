import React, {useState} from 'react';
import './App.css';
import Counter from "./Components/Counter";
import SetupCounter from "./Components/SetupCounter";
import s from './Components/Counter.module.css';

// export type ValuesPropsType = {
//     minValue: any,
//     maxValue: any
// }

function App() {


    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    const [state, setState] = useState(minValue);
    const [error, setError] = useState('Set a Number');


    const setMin = (minVal: number) => {
        setMinValue(minVal)
        if (minVal === maxValue || minVal < 0 || minVal > maxValue) {
            setError('Incorrect values!')
        } else setError('')
    }
    const setMax = (maxVal: number) => {
        setMaxValue(maxVal)
        if (maxVal === minValue || maxVal < 0 || maxVal < minValue) {
            setError('Incorrect values')
        } else setError('')
    }
    const setButton = () => {
        setState(minValue)
    }

    const addNumber = () => state < maxValue ? setState(state + 1) : true;

    const reset = () => setState(0);

    return (
        <div className={s.counterMain}>
            <SetupCounter
                     error={error}
                     minNumber={minValue}
                     maxNumber={maxValue}
                     setButton={setButton}
                     setMaxValue={setMax}
                     setMinValue={setMin}/>
            <Counter error={error}
                     minValue={minValue}
                     maxValue={maxValue}
                     addNumber={addNumber}
                     reset={reset}
                     state={state}/>
        </div>

    );
}

export default App;
