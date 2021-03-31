import React from 'react'
import discord from './discord.png'
import buy from './buy.png'
import twitter from './twitter.png'
const Footer = () => {
    const footerStyle = {
        width: '100%',
        height: 52,
        padding: '1.5em',
        position: 'fixed',
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
        background: '#D6D7DC',
        borderTop: '2px solid white'
    }
    const iconStyle = {
        marginLeft: 17,
        marginRight: 17,
    }
    const imgStyle={
        width:40
    }
    return (
        <>
            <input className='imessage-text' style={{
                position: 'fixed', 
                bottom: 52, 
                zIndex: 2, 
                width: '98%', 
                padding: '.5em 1em', 
                borderRadius: '25px', 
                border: '1px solid rgb(197,197,197)',
                outline:'none',
                boxShadow:'none'
            }} placeholder='iMessage' type="text" />
            <div className='footer' style={footerStyle}>
                <a href="https://discord.gg/f2V5bXrYtR" style={iconStyle}><img style={imgStyle} src={discord} alt="discord logo" /></a>
                <a style={iconStyle} href="https://opensea.io/collection/shitty-emojis"><img style={imgStyle} src={buy} alt="buy logo" /></a>
                <a style={iconStyle} href="https://twitter.com/yungjake"><img style={imgStyle} src={twitter} alt="twitter icon" /></a>
            </div>
        </>
    )
}
export default Footer
