import React from 'react'

const Message = props => {
    const { content, sender } = props
    return (
        <p dangerouslySetInnerHTML={{ __html: content }}  className={sender ? 'from-me' : 'from-them'}></p>
    )
}
export default Message
