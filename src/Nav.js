import React from 'react'

const Nav = () => {
    const navStyle={
        background:'#282525',
        height:68,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
    const titleStyle={
        color:'white',
        textTransform:'lowercase',
        paddingTop:20,
        paddingBottom:25,
        fontSize:18
    }
    return (
        <div style={navStyle}>
            <h1 style={titleStyle}>Emoji Punks</h1>
        </div>
    )
}
export default Nav
