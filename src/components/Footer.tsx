import React from 'react'
import { useState } from 'react';
import { FaRandom } from 'react-icons/fa'; 
import { TiArrowLoop } from "react-icons/ti";
import { BsFillVolumeUpFill } from "react-icons/bs";
import { BsFillVolumeMuteFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

import {
  IoMdVolumeHigh,
  IoMdVolumeOff,
  IoMdVolumeLow,
} from 'react-icons/io';

import {
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5' ;

function Footer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVolumeActive, setVolume] = useState(true);
  const [isFavorite, setFavorite] = useState(false);
  

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const toggleVolume = () => {
    setVolume((prev) => !prev); 
  }

  const toggleIfFavourite = () => {
    setFavorite((prev) => !prev);
  }
  
  return (
    <div className='footerBox'>
        <div className='flex justify-between w-52'>
          <img className='bg-black border-solid rounded mt-1 mb-1 p-1' src="" alt='songCover'/>

          <div className='grid gap-1 grid-cols-1 items-center text-neutral-500'>
            <h3>Songtext</h3>
            <h4 className='-mt-8'>Artist Name</h4>
          </div>
        </div>
        
        <div>
          <div className='w-48 mt-2 ml-56 flex justify-between'>
            <button>
              <FaRandom size="16px" color="white"/>
            </button>

            <button>
              <IoPlaySkipBackSharp size="22px" color="white"/>
            </button>

            <button onClick={togglePlayPause}>
              {isPlaying ? <IoPauseSharp size="34px" color="#fff"/> : <IoPlaySharp size="34px" color="#fff"/>}
            </button>
          
            <button>
              <IoPlaySkipForwardSharp size="22px" color="white"/>
            </button>

            <button>
              <TiArrowLoop size="22px" color="white"/>
            </button>
          </div>
          <p className='bg-black h-2 w-104 mt-2 border-solid rounded-lg'></p>
        </div>


        <div className='flex justify-between'>
          <button onClick={toggleIfFavourite}>
            {isFavorite ? <AiFillHeart size="30px" color="red"/> : <AiOutlineHeart size="30px" color="red"/>}
          </button>
          
          <button className='ml-8' onClick={toggleVolume}>
            {isVolumeActive ? <BsFillVolumeUpFill size="22px" color="white"/> : <BsFillVolumeMuteFill size="22px" color="white"/>}
          </button>

          <p className='bg-black h-2 w-28 mt-9 border-solid rounded-lg'></p>
        </div>
      </div>
  )
  
}

export default Footer