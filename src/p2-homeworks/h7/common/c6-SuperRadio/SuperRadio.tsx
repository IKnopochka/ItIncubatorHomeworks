import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps, Fragment} from 'react'
import {checkboxClasses} from "@mui/material";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    debugger
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        console.log(e.currentTarget.value)
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
           // console.log(onChangeOption)
        }
        if (onChange) {
            onChange(e)
        }

    }

    console.log(value)
    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + '-' + i}>
            <input
                type={'radio'}
                name={name}
                value={o}
                checked={value===o}
                onChange={onChangeCallback}
                // name, checked, value, onChange
            />
            {o}
        </label>
    )) : []

    return (

        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
