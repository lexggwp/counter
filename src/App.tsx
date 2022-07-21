import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Components/Counter";
import SetupCounter from "./Components/SetupCounter";
import s from './Components/Counter.module.css';

// type ErrorPropsType = 'Set a number' | 'Incorrect values!' | '';


function App() {


    const [minValue, setMinValue] = useState(1);
    const [maxValue, setMaxValue] = useState(5);
    const [state, setState] = useState(0);
    const [error, setError] = useState<string>('Set a number');

    // localState
    useEffect(() => {
        let localState = localStorage.getItem('localState');
        if (localState) {
            setState(JSON.parse(localState))
        }
        let localError = localStorage.getItem('localError');
        if (localError !== null) {
            setError(localError)
        }
        let localMin = localStorage.getItem('localMin');
        if (localMin) {
            setMinValue(JSON.parse(localMin))
        }
        let localMax = localStorage.getItem('localMax');
        if (localMax) {
            setMaxValue(JSON.parse(localMax))
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('localState', JSON.stringify(state));
        localStorage.setItem('localError', error)
        localStorage.setItem('localMin', JSON.stringify(minValue))
        localStorage.setItem('localMax', JSON.stringify(maxValue))
    }, [state, error, minValue, maxValue]);


    // app functions

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

    const addNumber = () => {
        localStorage.setItem('localState', state.toString());
        if (state < maxValue) {
            setState(state + 1)
        }
    }

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
