import React from 'react'

const Footer = () => {
    const footerStyle={
        width:288,
        height:50,
        position:'fixed',
        bottom:0,
        background:'rgb(237, 236, 242)',
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
