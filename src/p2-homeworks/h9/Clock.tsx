import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    debugger
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)
    const stop = () => {
        // stop
        clearInterval(timerId)

    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        // show
        setShow(true)

    }
    const onMouseLeave = () => {
        // close
        setShow(false)
    }

        const stringTime = `${('0' + date?.getHours()).slice(-2)}:${('0' + date?.getMinutes()).slice(-2)}:${('0' + date?.getSeconds()).slice(-2)}` // fix with date
        const stringDate = `${('0' + date?.getMonth()).slice(-2)}.${('0' + date?.getDate()).slice(-2)}.${date?.getFullYear()}` // fix with date


    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {!!timerId && (<div>{stringTime}</div>)}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
