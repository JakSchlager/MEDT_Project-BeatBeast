import Header from '../components/Header'
import Footer from '../components/Footer'
import React from 'react'

function App() {

  return (
    <div className='h-full'>
      <Header/>
      
      <div className='bg-neutral-900'>
        <br></br>
        <h1 className='w-full text-center text-8xl text-white mt-80'>Want to feel the Beast in You</h1>
        <h1 className='w-full text-center text-6xl text-white mt-96'>Ihre Playlists</h1>

        <div className='flex w-full justify-center'>
          <div className='w-100 pt-2 pb-2 mt-10 bg-white hover:bg-neutral-300 duration-200 shadow-white-500/50 border-solid rounded-md'>
            <a className='flex justify-between text-black text-5xl border-solid rounded-md' href="#">
            <img className='ml-8 w-16' src="/img/books.png"/>
            <h2 className='mt-2 mr-8'>Meine Bibliothek</h2>
            </a>
          </div>
        </div>
        
        <div className='w-full bg-neutral-800 p-6 pb-108 mt-64'>
          <h1 className='text-white text-6xl text-center'>Die neusten Hits</h1>
        </div>
        
        <div className='bg-neutral-900 h-screen'>
          <h1 className='w-full text-center text-6xl text-white pt-12'>Zuletzt gehört</h1>
        </div>
      </div>
      <Footer/> 
      
    </div>
  )
}

export default App