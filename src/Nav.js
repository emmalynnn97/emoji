import React from 'react'
import time from './time.png'
import notifs from './notifs.png'
import jake from './jake.png'
import arrow from './arrow.png'
const Nav = () => {
    const navStyle = {
        background: '#F5F5F5',
        height: 112,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
    }
    const captionStyle = {
        fontSize: 11
    }
    return (
        <div style={navStyle}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
            }}>
                <img src={time} alt="time" />
                <img src={notifs} alt="notifs" />
            </div>
            <img style={{
                position: 'absolute',
                top: 50,
                left:14
            }} src={arrow} alt="arrow" />
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
                    position: 'relative',
                    top: '-10px'
                }}>
                    <img className='jake-img' src={jake} alt="jake" />
                    <span style={captionStyle}>yung</span>
                </div>

            </div>
        </div>
    )
}
export default Nav
