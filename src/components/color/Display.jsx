import React from 'react'
import PropTypes from 'prop-types'

const Display = ({color})=> (
    <>
        <div style={{
            width: '250px',
            height: '250px',
            background: color,
            padding: '10%'
        }}>
        Color blox 
        </div>
    </>
)

export default Display;
