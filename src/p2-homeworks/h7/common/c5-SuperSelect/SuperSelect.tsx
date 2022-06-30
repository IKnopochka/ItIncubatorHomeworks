import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './SuperSelect.module.css'

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
    const mappedOptions: any[] = options ? options.map((m, i) => (
        <option value={m} selected={value === m}>
            {m}
        </option>
    )) : []; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
        if (onChange) {
            onChange(e)
        }
    }

    return (
        <div className={s.box}>
            <select
                    onChange={onChangeCallback}
                    {...restProps}>
                {mappedOptions}
            </select>
        </div>

    )
}

export default SuperSelect