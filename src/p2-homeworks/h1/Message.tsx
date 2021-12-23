import React from 'react'
import {Avatar} from "./messageComponents/Avatar/Avatar";
import {Comment} from "./messageComponents/Comment/Comment";
import classes from "./Message.module.css";

type propsMessage = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: propsMessage) {
    return (
        <div className={classes.wrapper}>
            <Avatar src={props.avatar}/>
            <Comment name={props.name} message={props.message} time={props.time}/>
        </div>
    )
}

export default Message
