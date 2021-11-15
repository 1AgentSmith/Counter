import React from 'react'


export type PropsTypeButton = {
    buttonTitle: string
    disabled?: boolean
    onClickHandler: () => void
}

export function Button(props: PropsTypeButton) {
    return (
        <div>
            <button onClick={props.onClickHandler} disabled={props.disabled}>{props.buttonTitle}</button>
        </div>
    )
}