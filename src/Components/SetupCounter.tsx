import React from 'react';
import s from "./SetupCounter.module.css";
import Button from "./Button";


type SetupCounterPropsType = {
    setMinValue: (minVal: number) => void;
    setMaxValue: (maxVal: number) => void;
    setButton: () => void;
    minNumber: number,
    maxNumber: number,
    error: string;
}

const SetupCounter = (props: SetupCounterPropsType) => {

    const onChangeMinHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setMinValue(+event.currentTarget.value)
    }
    const onChangeMaxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(+event.currentTarget.value)
    }

    const inputClassName = `${s.counterInput} ${props.error === 'Incorrect values!' ? s.counterInputError: ''}`

    return (
        <div className={s.counterBlock}>
            <div className={s.counterDisplay}>
                <div className={s.counterValue}>
                    <p>min value:</p>
                    <input className={inputClassName} value={props.minNumber} onChange={onChangeMinHandler} type={"number"}/>
                </div>
                <div className={s.counterValue}>
                    <p>max value</p>
                    <input className={inputClassName} value={props.maxNumber} onChange={onChangeMaxHandler} type={"number"}/>
                </div>
            </div>
            <div className={s.counterSetupBottom}>
                <Button disabled={props.error !== 'Set a number'} style={s.counterInc} callback={props.setButton} name={'set'}/>
            </div>
        </div>
    );
};

export default SetupCounter;