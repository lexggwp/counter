import React from 'react';

type ButtonsPropsType = {
    callback: () => void,
    name: string,
    style: string,
    disabled?: boolean
}


const Button = (props: ButtonsPropsType) => {


    return (
        <div>
            <button disabled={props.disabled} onClick={props.callback} className={props.style}>{props.name}</button>
        </div>
    );
};

export default Button;