import React from 'react'
import jake from './jake.png'
const Nav = () => {
    const navStyle = {
        background: '#F5F5F5',
        height: 112,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        position:'fixed',
        zIndex:2,
        width:'100%',
        left:0
    }
    const captionStyle = {
        fontSize: 11
    }
    const timeStyle={
        margin:0,
    }
    return (
        <div className='nav' style={navStyle}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems:'center',
                width: '100%'
            }}>
                
            </div>
           
<svg style={{
                position: 'absolute',
                top: 17,
                left:13
            }} width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="3.12132" y1="13" x2="13" y2="22.8787" stroke="#006FFF" stroke-width="3" stroke-linecap="round"/>
<line x1="3" y1="12.8787" x2="12.8787" y2="3" stroke="#006FFF" stroke-width="3" stroke-linecap="round"/>
</svg>

            
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                    <img className='jake-img' src={jake} alt="jake" />
                    <span style={captionStyle}>yung</span>
                </div>

            </div>
        </div>
    )
}
export default Nav
