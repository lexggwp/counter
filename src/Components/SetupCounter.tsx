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
    disableStatus: boolean
}

const SetupCounter = (props: SetupCounterPropsType) => {

    const onChangeMinHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setMinValue(+event.currentTarget.value)
    }
    const onChangeMaxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(+event.currentTarget.value)
    }

    const inputClassName = `${s.counterInput} ${props.error ? s.counterInputError: ''}`

    return (
        <div className={s.counterBlock}>
            <div className={s.counterDisplay}>
                <div className={s.counterValue}>
                    <p>min value:</p>
                    <input className={inputClassName} value={props.minNumber} onChange={onChangeMinHandler} type={"number"}/>
                </div>
                <div className={s.counterValue}>
                    <p>start value</p>
                    <input className={inputClassName} value={props.maxNumber} onChange={onChangeMaxHandler} type={"number"}/>
                </div>
            </div>
            <div className={s.counterSetupBottom}>
                <Button disabled={!props.disableStatus && !!props.error} style={s.counterInc} callback={props.setButton} name={'set'}/>
            </div>
        </div>
    );
};

export default SetupCounter;