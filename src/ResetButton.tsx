type PropsType = {
    reset: () => void
}

export const ResetButton = (props: PropsType) => {
    let onClickHandler = ()=> {
        props.reset()
    }
    return (
        <div className={'ResetButton'}>
            <button  onClick={onClickHandler} disabled={false}>Reset</button>
        </div>

    )
}