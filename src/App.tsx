import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Components/Counter";
import SetupCounter from "./Components/SetupCounter";
import s from './Components/Counter.module.css';

// type ErrorPropsType = 'Set a number' | 'Incorrect values!' | '';


function App() {


    const [inputMinValue, setInputMinValue] = useState(1);
    const [inputMaxValue, setInputMaxValue] = useState(5);
    const [displayState, setDisplayState] = useState(0);
    const [error, setError] = useState<string>('Set a number');

    // localState
    useEffect(() => {
        let localDisplayState = localStorage.getItem('localDisplayState');
        if (localDisplayState) {
            setDisplayState(JSON.parse(localDisplayState))
        }
        let localError = localStorage.getItem('localError');
        if (localError) {
            setError(JSON.parse(localError))
        }
        let localMinValue = localStorage.getItem('localMinValue');
        if (localMinValue) {
            setInputMinValue(JSON.parse(localMinValue))
        }
        let localMaxValue = localStorage.getItem('localMaxValue');
        if (localMaxValue) {
            setInputMaxValue(JSON.parse(localMaxValue))
        }
    }, [] );


    // app functions

    const setMinInput = (minVal: number) => {
        setInputMinValue(minVal);
        localStorage.setItem('localMinValue', JSON.stringify(minVal))
        if (minVal >= inputMaxValue || minVal < 0) {
            setError('Incorrect values!')
            localStorage.setItem('localError', JSON.stringify(error))
        } else {
            setError('Set a number');
        }

    }
    const setMaxInput = (maxVal: number) => {
        setInputMaxValue(maxVal);
        localStorage.setItem('localMaxValue', JSON.stringify(maxVal))
        if (maxVal <= inputMinValue || maxVal < 0 || inputMinValue < 0) {
            setError('Incorrect values!')
            localStorage.setItem('localError', JSON.stringify(error))
        } else {
            setError('Set a number');
        }
    }
    const setButton = () => {
        setDisplayState(inputMinValue);
        setError('');
        localStorage.setItem('localError', JSON.stringify(''))
        localStorage.setItem('localDisplayState', JSON.stringify(inputMinValue))

    }


    const increaseNumberOnDisplay = () => {
        setDisplayState(displayState => displayState + 1)
        localStorage.setItem('localDisplayState', JSON.stringify(displayState + 1))

    }

    const resetNumberOnDisplay = () => {
        setDisplayState(inputMinValue);
        localStorage.setItem('localDisplayState', JSON.stringify(inputMinValue))
    }

    return (
        <div className={s.counterMain}>
            <SetupCounter
                error={error}
                minNumber={inputMinValue}
                maxNumber={inputMaxValue}
                setButton={setButton}
                setMaxValue={setMaxInput}
                setMinValue={setMinInput}
            />
            <Counter
                error={error}
                minValue={inputMinValue}
                maxValue={inputMaxValue}
                increaseButton={increaseNumberOnDisplay}
                resetButton={resetNumberOnDisplay}
                state={displayState}
            />
        </div>

    );
}

export default App;
