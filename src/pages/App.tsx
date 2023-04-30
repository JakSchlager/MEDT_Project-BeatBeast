import Header from '../components/Header'
import Footer from '../components/Footer'
import React from 'react'
import { NavLink } from 'react-router-dom'
import NewsetHitsSliderComponents from '../components/NewsetHitsSliderComponents.jsx'

function App() {

  return (
    <div className='h-full bg-neutral-900'>
      
      <div>
        <br></br>
        
        <div className='top-0'>
          <div className='flex justify-center w-screen'>
            <img className='absolute top-0' src="/img/manOnBeatBeast.png"/>
          </div>
          <h1 className='headerText'>Want to feel the Beast in You</h1>
        </div>

        <h1 className='w-full text-center text-6xl text-white relative mt-86'>Ihre Playlists</h1>

        <div className='flex w-full justify-center bg-neutral-900 pb-24'>
          <div className='w-100 pt-2 pb-2 mt-10 bg-white hover:shadow-lg hover:shadow-red-600 duration-200 shadow-white-500/50 border-solid rounded-md'>
            <a className='flex justify-between text-black hover:text-gray-800 duration-200 text-5xl border-solid rounded-md' href="#">
            <img className='ml-8 w-16' src="/img/books.png"/>
            <NavLink to={"/bibliothek"} className='relative top-2 mr-8'>Meine Bibliothek</NavLink>
            </a>
          </div>
        </div>
        

        <div className='w-full bg-neutral-800 p-6 pb-113'>
          <h1 className='text-white text-6xl text-center'>Die Neusten Hits</h1>


          <div>
          <NewsetHitsSliderComponents/>
          </div>
        </div>
        
        <div className='bg-neutral-900 pb-114'>
          <h1 className='relative text-white text-center text-6xl pt-12'>Zuletzt Gehört</h1>
        </div>
      </div>
    </div>
  )
}

export default App