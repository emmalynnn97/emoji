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
            }} width="26" height="34" viewBox="0 0 26 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.1893 11.1273L3.1886 17.3091L10.1893 23.4909C16.9052 29.4213 19.6758 30.9146 19.6758 28.6038C19.6758 28.016 17.074 25.2341 13.894 22.422L8.11222 17.3091L13.894 12.1962C17.074 9.38405 19.6758 6.60227 19.6758 6.01438C19.6758 3.70367 16.9052 5.19691 10.1893 11.1273Z" fill="#006FFF"/>
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
