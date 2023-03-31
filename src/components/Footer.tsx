import React from 'react'
import { useState } from 'react';

import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5';

function Footer() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className='w-full bg-neutral-800 h-28 fixed bottom-0'>
      <div className='flex justify-around shadow-t'>
        <img src="" alt='songCover'/>

        <div>
          <h3>Songtext</h3>
          <h4>Artist Name</h4>
        </div>
        

        <div className='songBar'>
          <div className='flex'>
            <img className='' src="" alt="randomSongIcon"/>

            <button>
              <IoPlaySkipBackSharp />
            </button>
            <button>
              <IoPlayBackSharp />
            </button>

            <button>
              {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
            </button>
          
            <button>
              <IoPlayForwardSharp />
            </button>
            <button>
              <IoPlaySkipForwardSharp />
            </button>

            <img className='' src="" alt="loopIcon"/>
          </div>

          <p className='bg-black border-solid rounded-lg text-center text-white w-104'>SongDurationBar</p>
        </div>

        <div className='flex justify-between'>
          <img src="" alt="HeartIcon"/>
          <img className="" src="" alt="volumeIcon"/>
          
          <p className='ml-2'>volumeBar</p>
        </div>
      </div>
    </div>
  )
}

export default Footer