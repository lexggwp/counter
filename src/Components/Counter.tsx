import React from 'react';
import s from './Counter.module.css'
import Button from "./Button";


type CounterPropsType = {
    state: number | string;
    addNumber: () => void;
    reset: () => void;
    minValue: number,
    maxValue: number
    error: string
    disableStatus: boolean
}


const Counter = (props: CounterPropsType) => {


    const spanClassNameNoError = `${s.counterNumber} ${props.state === props.maxValue ? s.counterRed : ''}`;
    const spanClassNameError = `${s.counterError}`
    return (
        <div className={s.counterBlock}>
            <div className={s.counterDisplay}>
                <span className={props.error? spanClassNameError: spanClassNameNoError}>
                    {props.error ? props.error : props.state}
                </span>
            </div>
            <div className={s.counterBottom}>
                <Button disabled={props.disableStatus && props.state >= props.maxValue} style={s.counterInc} callback={props.addNumber} name={'inc'}/>
                <Button disabled={props.disableStatus && props.state <= props.minValue} style={s.counterReset} callback={props.reset} name={'reset'}/>
            </div>
        </div>
    );
};

export default Counter;