type PropsType = {
    counterNum: number
    stateStartNum?: number
    stateMaxNum?: number
    inputStartValue?: number
    inputMaxValue?: number
    checkError: boolean
}


export const Display = (props: PropsType) => {
    return (
        <div className={!props.checkError ? 'IncorrectValue' : 'Display'}>

            {/*{props.stateStartNum === props.inputStartValue && props.stateMaxNum === props.inputMaxValue ? props.counterNum : 'incorrect value' }*/}
            {!props.checkError ? "enter values and press 'set' ": props.counterNum}


        </div>
    )
}