type PropsType = {
    numAdd: () => void

}

export function IncButton(props: PropsType) {
    let onClickHandler = () => {
        props.numAdd()
    }
    return (
        <div className={'IncButton'}>
            <button onClick={onClickHandler}>Inc</button>
        </div>

    )
}