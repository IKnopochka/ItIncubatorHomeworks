import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        value,
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    console.log(value, 'value select')
    const mappedOptions: any[] = options ? options.map((m, i) => (
        <option value={m} selected={value===m}>
            {m}
        </option>
    )) : []; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        console.log(e.currentTarget.value,'select')
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
        if (onChange) {
            onChange(e)
        }
    }

    return (
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
