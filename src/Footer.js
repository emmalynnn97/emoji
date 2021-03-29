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
        background:'rgba(255,255,255,.8)',
        backdropFilter:'blur(4px)'
    }
    const btnStyle={
        textTransform:'uppercase',
        border:'2px solid rgb(0,111,255)',
        color:'#006FFF',
        padding:'.35em 1em',
        borderRadius:'4px',
        fontSize:13
    }
    return (
        <div style={footerStyle}>
            <a style={btnStyle}>Buy</a>
            <a style={btnStyle}>Discord</a>
            <a style={btnStyle}>Twitter</a>
        </div>
    )
}
export default Footer
