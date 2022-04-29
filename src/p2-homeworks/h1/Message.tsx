import React from 'react'

type PropsMessage = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsMessage) {
    return (
        <div className="Message">
            <img className="avatar" src={props.avatar} alt="avatar"></img>
            <div className="box">
                <span className="name">{props.name}</span>
                <span className="message">{props.message}</span>
                <span className="time">{props.time}</span>
            </div>
        </div>
    )
}

export default Message
