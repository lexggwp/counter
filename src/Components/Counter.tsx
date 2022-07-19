import React from 'react';
import s from './Counter.module.css'
import Button from "./Button";
import {ValuesPropsType} from "../App";

type CounterPropsType = {
    state: number;
    addNumber: () => void;
    reset: () => void;
    values: ValuesPropsType
}

const Counter = (props: CounterPropsType) => {


    return (
        <div className={s.counterBlock}>
            <div className={s.counterDisplay}>
                <span className={`${s.counterNumber} ${props.state === props.values.maxValue ? s.counterRed : ''}`}>{props.state}</span>
            </div>
            <div className={s.counterBottom}>
                <Button disabled={props.state >= props.values.maxValue} style={s.counterInc} callback={props.addNumber} name={'inc'}/>
                <Button disabled={props.state <= props.values.minValue} style={s.counterReset} callback={props.reset} name={'reset'}/>
            </div>
        </div>
    );
};

export default Counter;