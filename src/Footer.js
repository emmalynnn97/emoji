import React from 'react'
import discord from './discord.png'
import buy from './buy.png'
import twitter from './twitter.png'
import imessage from './imessage.png'
const Footer = () => {
    const footerStyle={
        width:'100%',
        height:52,
        padding:'2em',
        position:'fixed',
        bottom:0,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        zIndex:2,
        background:'#D6D7DC'
    }
    const iconStyle={
        marginLeft:17,
        marginRight:17
    }
    return (
        <>
        <img className='message-img' style={{position:'fixed', bottom:64,zIndex:2, width:'100%'}} src={imessage} alt="imessage"/>
        <div style={footerStyle}>
            <a style={iconStyle}><img src={discord} alt="discord logo"/></a>
            <a style={iconStyle} href="https://opensea.io/collection/shitty-emojis"><img src={buy} alt="buy logo"/></a>
            <a style={iconStyle} href="https://twitter.com/yungjake"><img src={twitter} alt="twitter icon"/></a>
        </div>
        </>
    )
}
export default Footer
