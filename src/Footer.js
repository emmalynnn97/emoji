import React from 'react'
import discord from './discord.png'
import buy from './buy.png'
import twitter from './twitter.png'
const Footer = () => {
    const footerStyle={
        width:'100%',
        height:52,
        padding:'1.75em',
        position:'fixed',
        bottom:0,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        zIndex:2,
        background:'#D6D7DC',
        borderTop:'2px solid white'
    }
    const iconStyle={
        marginLeft:17,
        marginRight:17
    }
    return (
        <>
        <input className='imessage-text' style={{position:'fixed', bottom:58,zIndex:2, width:'98%',padding:'.5em 1em', borderRadius:'25px', border:'1px solid rgb(197,197,197)'}} placeholder='iMessage' type="text"/>
        <div className='footer' style={footerStyle}>
            <a href="https://discord.gg/f2V5bXrYtR" style={iconStyle}><img src={discord} alt="discord logo"/></a>
            <a style={iconStyle} href="https://opensea.io/collection/shitty-emojis"><img src={buy} alt="buy logo"/></a>
            <a style={iconStyle} href="https://twitter.com/yungjake"><img src={twitter} alt="twitter icon"/></a>
        </div>
        </>
    )
}
export default Footer
