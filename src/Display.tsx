import React from 'react';

type PropsType = {
    startNum: number
    maxNum: number
    counterNum: number
    inputMaxValue: number
    inputStartValue: number
    setError: (value: boolean) => void
    error: boolean
    setIncorrectValue: (value: boolean) => void
    incorrectValue: boolean
}


export const Display = (props: PropsType) => {
    if (props.startNum !== props.inputStartValue || props.maxNum !== props.inputMaxValue) {
        props.setError(true)
    }
    if (props.startNum < 0 || props.maxNum < 0 || props.startNum === props.maxNum || props.startNum > props.maxNum) {
        props.setIncorrectValue(true)
    } else props.setIncorrectValue(false)
    return (
        <div className={props.counterNum === props.inputMaxValue ? 'DisplayIncorrect' : 'Display'}>
            {props.incorrectValue ? <div className={'setDisplayError'}>Incorrect value!</div> :
                props.error ? <div className={'setDisplayError'}>enter values end press 'set'</div> :
                    props.counterNum}
        </div>
    )
}