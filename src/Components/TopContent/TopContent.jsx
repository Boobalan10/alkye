import React from 'react'
import Assets from '../../Assests/Assets'

function TopContent() {
    return (
        <>
            <div className='logo-sec'>
                <img src={Assets.logo} alt="Logo-Image" />
            </div>
            <div className='head-content'>
                <h1>alkye</h1>
                <small>The easiest test you will ever do</small>
            </div>
        </>
    )
}

export default TopContent
