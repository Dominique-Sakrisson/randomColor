import React from 'react'
import PropTypes from 'prop-types'

const Display = ({color, opacity})  =>  (
    <>
    
          
            <div style={{
                width: '250px',
                height: '250px',
                background: color
            }}>
            <img style={{opacity: opacity, width: '100%'}} src='https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg'/>
            </div>
        
    </>
)

export default Display;
