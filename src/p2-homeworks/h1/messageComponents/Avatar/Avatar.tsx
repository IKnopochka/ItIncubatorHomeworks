import React from 'react'
import classes from "./Avatar.module.css";

type propsAva = {
    src: string
}

export const Avatar = (props: propsAva) => {
    return <div className={classes.ava}>
        <img src={props.src} className={classes.pic}/>
    </div>
}