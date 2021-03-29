import React from 'react'

const Message = props => {
    const { content, sender } = props
    return (
        <p className={sender ? 'from-me' : 'from-them'}>
            {content}
        </p>
    )
}
export default Message
