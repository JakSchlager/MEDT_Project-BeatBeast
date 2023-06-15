import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Search() {
    return (
        <div className='fixed relative z-30'>
        <div className='bg-neutral-900 p-1 flex flex-col justify-around h-screen w-screen'>
            <img className='h-72 w-full flex items-center' src="/img/404Logo.svg"/>
            <div className='relative -mt-20'>
                <h1 className='text-7xl w-full text-center text-white font-bold'>Site is under Construction</h1>
                <h1 className='text-5xl w-full text-center mt-14 text-white font-light'>We thank you for your patience!</h1>  
                <div className="progress-bar"><span></span></div>
            </div>
            
            <div className='w-full text-center -mt-28'>
                <NavLink className="text-white bg-red-600 rounded-sm hover:bg-red-700 duration-150 cursor-default p-2" to={"/home"}>Return Home</NavLink>
            </div>
        </div>  
    </div>
    )
}