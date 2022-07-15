import React from 'react';
import s from './Counter.module.css'

type CounterPropsType = {
    state: number;
    inc: () => void;
    reset: () => void;
}

const Counter = (props: CounterPropsType) => {

    const onClickHandler = () => {
        props.inc();
    }
    const onResetClickHandler = () => {
        props.reset();
    }

    return (
        <div className={s.counterBlock}>
            <div className={s.counterDisplay}>
                <span className={props.state < 5 ? s.counterNumber: s.counterRed}>{props.state}</span>
            </div>
            <div className={s.counterBottom}>
                <button disabled={props.state > 4} onClick={onClickHandler} className={s.counterInc}>inc</button>
                <button disabled={props.state < 1} onClick={onResetClickHandler} className={s.counterReset}>reset</button>
            </div>
        </div>
    );
};

export default Counter;