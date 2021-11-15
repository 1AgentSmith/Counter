import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Display} from './Display';
import {Animation} from './Animation';
import {Button} from './Button';
import {Setting} from './Setting';

let counter = {
    startValue: 0,
    maxValue: 0,
}


function App() {
    let [counterNum, setCounterNum] = useState(0)
    let [startNum, setStartNum] = useState(0)
    let [maxNum, setMaxNum] = useState(0)
    let [error, setError] = useState<string | null>(null)

    const confirmValues = (min: number, max: number) => {
        counter.startValue = min
        counter.maxValue = max
        setCounterNum(counter.startValue)
    }

    const onIncClickHandler = () => {
        if (counterNum < counter.maxValue) {
            setCounterNum(counterNum + 1)
        } else return
    }
    const onResetClickHandler = () => {
        setCounterNum(counter.startValue)
    }
    const onConfirmClickHandler = () => {
        confirmValues(startNum, maxNum)
    }
    const onStartValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartNum(+e.currentTarget.value)
    }
    const onMaxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxNum(+e.currentTarget.value)
    }

    return (
        <div className={'App'}>
            <Animation/>

            {/*{error && <div className={counterNum === counter.maxValue? 'DisplayIncorrect' :'Display'}>{counterNum}</div>}*/}
            {error ? <div>{error}</div> :
                <div className={counterNum === counter.maxValue ? 'DisplayIncorrect' : 'Display'}>{counterNum}</div>}


            <div className={'InputContainer'}>
                <div>
                    <span className={'span_Max'}>Max value</span>
                    <input type="number" value={maxNum} onChange={onMaxValueChangeHandler}/>
                </div>
                <div>
                    <span>Start value</span>
                    <input type="number" value={startNum} onChange={onStartValueChangeHandler}/>
                </div>
            </div>

            <Button
                buttonTitle={'Set'}
                disabled={counter.startValue === startNum && counter.maxValue === maxNum}
                onClickHandler={onConfirmClickHandler}
            />
            <Button
                buttonTitle={'Inc'}
                disabled={counter.maxValue === counterNum}
                onClickHandler={onIncClickHandler}
            />
            <Button
                buttonTitle={'Reset'}
                onClickHandler={onResetClickHandler}
            />
        </div>
    )
}

export default App;
