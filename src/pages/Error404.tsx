import React from 'react'

function Error404() {
  return (
    <div className='fixed relative z-30'>
        <div className='bg-neutral-900 p-5 h-screen w-screen'>
            <img className='h-72 w-full flex items-center mt-24' src="/img/404Logo.svg"/>
            <h1 className='text-20xl w-full text-center text-white'>404</h1>
            <h2 className='text-5xl w-full text-center text-white'>There is no Music playing here</h2>  
        </div>  
    </div>
  )
}

export default Error404