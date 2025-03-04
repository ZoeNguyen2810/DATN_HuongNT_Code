import React from 'react'
import "./Video.scss"

export const Video = () => {
    return (
        <div className='container'>
            <video controls className='video'>
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}
