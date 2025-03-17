import React from 'react'

function QouteAbout(props) {
    return (
        
        <div className='relative my-5'>
            <img src={props.src} alt="loard krishana and arjun" className='w-full h-70 object-center object-cover  rounded-2xl' />
            <span className='absolute bottom-30 left-90 font-bold w-2xl text-white text-6xl text-center'>{props.name}</span>
        </div>
    )
}

export default QouteAbout 