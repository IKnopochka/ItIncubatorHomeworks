import React from 'react'
import classes from "./Text.module.css";

type propsText = {
    name: string
    message: string
}

export const Text = (props: propsText) => {
    return <div className={classes.item}>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.msg}>{props.message}</div>
    </div>
}