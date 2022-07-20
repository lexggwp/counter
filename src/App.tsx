import React, {useState} from 'react';
import './App.css';
import Counter from "./Components/Counter";
import SetupCounter from "./Components/SetupCounter";
import s from './Components/Counter.module.css';

function App() {


    const [minValue, setMinValue] = useState(1);
    const [maxValue, setMaxValue] = useState(5);
    const [state, setState] = useState<number | 'Set a number'>('Set a number');
    const [error, setError] = useState('');
    const [disableStatus, setDisableStatus] = useState(false);


    const setMin = (minVal: number) => {
        setDisableStatus(true);
        setMinValue(minVal);
        setState('Set a number');
        minVal === maxValue || minVal < 0 || minVal > maxValue ?
            setError('Incorrect values!'):
            setError('')
    }
    const setMax = (maxVal: number) => {
        setDisableStatus(true);
        setMaxValue(maxVal);
        setState('Set a number');
        maxVal === minValue || maxVal < 0 || maxVal < minValue ?
            setError('Incorrect values'):
            setError('')
    }
    const setButton = () => {
        setState(minValue);
        setDisableStatus(false);
    }

    const addNumber = () => state < maxValue ? setState(+state + 1) : true;

    const reset = () => setState(0);

    return (
        <div className={s.counterMain}>
            <SetupCounter
                     disableStatus={disableStatus}
                     error={error}
                     minNumber={minValue}
                     maxNumber={maxValue}
                     setButton={setButton}
                     setMaxValue={setMax}
                     setMinValue={setMin}/>
            <Counter
                     disableStatus={disableStatus}
                     error={error}
                     minValue={minValue}
                     maxValue={maxValue}
                     addNumber={addNumber}
                     reset={reset}
                     state={state}/>
        </div>

    );
}

export default App;
