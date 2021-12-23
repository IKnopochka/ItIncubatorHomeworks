import React from 'react'
import classes from "./Time.module.css";


type propsTime = {
    time: string
}

export const Time = (props: propsTime) => {
    return (
        <div className={classes.item}>
            <div className={classes.time}>{props.time}</div>
        </div>
    )
}