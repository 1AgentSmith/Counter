import React, {useState} from 'react';
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
    let [error, setError] = useState(false)
    let [incorrectValueError, setIncorrectValueError] = useState(false)

    const increaseNum = () => {
        if (counterNum < counter.maxValue) {
            setCounterNum(counterNum + 1)
        }
    }
    const resetNum = () => {
        setCounterNum(counter.startValue)
    }
    const confirmValues = (min: number, max: number) => {
        counter.startValue = min
        counter.maxValue = max
        setCounterNum(counter.startValue)
        setError(false)
        setIncorrectValueError(false)
    }
    const onConfirmClickHandler = () => {
        confirmValues(startNum, maxNum)
    }

    return (
        <div className={'App'}>
            <Animation/>
            <Display counterNum={counterNum}
                     startNum={startNum}
                     maxNum={maxNum}
                     inputMaxValue={counter.maxValue}
                     inputStartValue={counter.startValue}
                     setError={setError}
                     error={error}
                     setIncorrectValue={setIncorrectValueError}
                     incorrectValue={incorrectValueError}
            />
            <Setting maxNum={maxNum}
                     startNum={startNum}
                     setStartNum={setStartNum}
                     setMaxNum={setMaxNum}
                     error={error}
                     incorrectValueError={incorrectValueError}
            />
            <Button
                title={'Set'}
                disabled={incorrectValueError || counter.startValue === startNum && counter.maxValue === maxNum}
                onClickHandler={onConfirmClickHandler}
            />
            <Button
                title={'Inc'}
                disabled={error || incorrectValueError || counter.maxValue === counterNum}
                onClickHandler={increaseNum}
            />
            <Button
                title={'Reset'}
                onClickHandler={resetNum}
                disabled={error || incorrectValueError}
            />
        </div>
    )
}

export default App;
