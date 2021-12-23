import React from 'react'
import classes from "./Comment.module.css";
import {Time} from "./Time/Time";
import {Text} from "./Text/Text";


type propsComment = {
    name: string
    message: string
    time:string
}

export const Comment = (props: propsComment) => {
    return <div className={classes.comment}>
        <Text name={props.name} message={props.message}/>
        <Time time={props.time}/>
    </div>
}