import React from 'react'

const Footer = () => {
    const footerStyle={
        width:'100%',
        height:50,
        position:'fixed',
        bottom:0,
        display:'flex',
        justifyContent:'center',
        alignItems:'flex-end',
    }
    const btnStyle={
        textTransform:'uppercase',
        border:'2px solid rgb(0,111,255)',
        color:'#006FFF',
        padding:'.35em 1em',
        borderRadius:'4px',
        fontSize:13,
        background:'white',
        marginLeft:3,
        marginRight:3,
        textDecoration:'none'
    }
    return (
        <div style={footerStyle}>
            <a href="https://opensea.io/collection/shitty-emojis" style={btnStyle}>Buy</a>
            <a style={btnStyle}>Discord</a>
            <a href="https://twitter.com/yungjake" style={btnStyle}>Twitter</a>
        </div>
    )
}
export default Footer
