import Header from '../components/Header'
import Footer from '../components/Footer'
import React, { useState, useEffect }  from 'react'
import { NavLink } from 'react-router-dom'
import { PlayerProvider } from '../components/Player/usePlayer' 
import { PlayGround } from '../components/Player/PlayGround'
import { PlayGroundCurrent } from '../components/Player/PlayGroundCurrent'
import { MdLibraryMusic } from 'react-icons/md'

function App() {
  
  return (
    <div className='h-full bg-neutral-900'>
      
      <div>
        <br></br>
        
        <div className='top-0 pb-5'>
          <div className='flex justify-center w-screen'>
            <img className='absolute top-0 left-0' src="/img/manOnBeatBeast.png"/>
          </div>
          <h1 className='headerText'>Want to feel the Beast in You</h1>
        </div>

        <h1 className='w-full text-center text-6xl text-white relative mt-85'>Ihre Playlists</h1>

        <div className='flex w-full justify-center bg-neutral-900 pb-24'>
          <div className='w-100 pt-2 pb-2 mt-10 bg-transparent border border-white hover:bg-red-700 hover:text-white duration-150 shadow-white-500/50 border-solid rounded-md'>
            <a className='flex justify-around text-black hover:text-gray-800 duration-200 text-5xl border-solid rounded-md' href="#">
            <MdLibraryMusic color='white'/>
            <NavLink to={"/bibliothek"} className='relative mr-8 text-white'>Meine Bibliothek</NavLink>
            </a>
          </div>
        </div>
        

        <div className='w-full bg-neutral-800 p-6 pb-20'>
          <h1 className='text-white text-6xl text-center'>Die Neusten Hits</h1>

          <div>
          <PlayerProvider>
            <PlayGround />
          </PlayerProvider>
        </div>
        
      </div>
        <div className='bg-neutral-900 pb-28'>
          <h1 className='relative text-white text-center text-6xl pt-12'>Zuletzt Gehört</h1>
          <div>
            <PlayerProvider>
              <PlayGroundCurrent/>
            </PlayerProvider>
          </div>
        </div>
        </div>
    </div>
  )
}

export default App