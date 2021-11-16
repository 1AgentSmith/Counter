import React, {ChangeEvent} from 'react';

type PropsTypeSetting = {
    maxNum: number
    startNum: number
    setStartNum: (value: number) => void
    setMaxNum: (value: number) => void
    error: boolean
    incorrectValueError: boolean
}

export function Setting(props: PropsTypeSetting) {

    const onStartValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

        props.setStartNum(+e.currentTarget.value)
    }
    const onMaxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxNum(+e.currentTarget.value)
    }
    return (
        <div className={'InputContainer'}>
            <div>
                <span className={'span_Max'}>Max value</span>
                <input className={props.maxNum === props.startNum || props.maxNum < props.startNum? 'RedBorderInput' : ''}
                       type="number"
                       value={props.maxNum}
                       onChange={onMaxValueChangeHandler}/>
            </div>
            <div>
                <span>Start value</span>
                <input className={props.startNum < 0 || props.startNum === props.maxNum ? 'RedBorderInput' : ''}
                       type="number"
                       value={props.startNum}
                       onChange={onStartValueChangeHandler}/>
            </div>
        </div>
    )
}