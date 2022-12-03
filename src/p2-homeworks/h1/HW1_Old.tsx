import React from 'react'
import Message from "./Message";

export const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

function HW1_Old() {
    return (
        <div>
            <hr/>
            Homework 1 Old

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1_Old
