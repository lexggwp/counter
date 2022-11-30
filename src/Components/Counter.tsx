import React from 'react';
import s from './Counter.module.css'
import Button from "./Button";


type CounterPropsType = {
    state: number;
    increaseButton: () => void;
    resetButton: () => void;
    minValue: number,
    maxValue: number
    error: string
}


const Counter = (props: CounterPropsType) => {



    const spanClassNameNoError = `${!props.error && props.state === props.maxValue  ? s.counterError : s.counterNumber}`;
    const spanClassNameError = `${s.counterError}`
    return (
        <div className={s.counterBlock}>
            <div className={s.counterDisplay}>
                <span className={props.error === 'Incorrect values!' ? spanClassNameError: spanClassNameNoError}>
                    {props.error ? props.error : props.state}
                </span>
            </div>
            <div className={s.counterBottom}>
                <Button disabled={!!props.error || props.state === props.maxValue} style={s.counterInc} callback={props.increaseButton} name={'inc'}/>
                <Button disabled={!!props.error || props.state === props.minValue} style={s.counterReset} callback={props.resetButton} name={'reset'}/>
            </div>
        </div>
    );
};

export default Counter;