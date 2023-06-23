import Slider from "rc-slider";
import React from 'react'
import "rc-slider/assets/index.css";
import { useEffect, useRef, useState } from "react";
import {
  TbPlayerPause,
  TbPlayerPlay,
  TbPlayerSkipBack,
  TbPlayerSkipForward,
  TbVolume,
  TbVolume3,
} from "react-icons/tb";
import { DefaultThumbnail } from "./DefaultThumbnail";
import { usePlayerCurrentListened } from "./usePlayerCurrentListened";
import { secondsToMinutes } from "./utils";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

export const PlayerCurrListened = () => {
  const [isRandom, setIsRandom] = useState(false);
  const [isVolumeOpen, setIsVolumeOpen] = useState(true);

  //volume can be a local state
  const [volume, setVolume] = useState(100);

  //   close volume on click outside
  const volumeRef = useRef<HTMLDivElement>(null);

  const audioRef = useRef<HTMLAudioElement>();
  const { currentMusic, setCurrentMusic, playList } = usePlayerCurrentListened();

  useEffect(() => {
    audioRef.current = new Audio(currentMusic.src);

    // volume changer
    audioRef.current.addEventListener("volumechange", (e: any) => {
      setVolume(+e.target.volume);
    });

    // play and pause
    audioRef.current.addEventListener("play", () => {
      setCurrentMusic({ isPlaying: true });
    });
    audioRef.current.addEventListener("pause", () => {
      setCurrentMusic({ isPlaying: false });
    });

    // got to the next music when current one finished
    audioRef.current.addEventListener("ended", (e: any) => {
      skipNext(new URL(e.target.src).pathname);
    });

    //lets trigger when audio is ready
    audioRef.current.addEventListener("canplay", () => {
      audioRef.current?.play();
    });

    // time and duration
    audioRef.current.addEventListener("loadedmetadata", (e: any) => {
      setCurrentMusic({
        curTime: e.target.currentTime,
        duration: e.target.duration,
      });
    });
    audioRef.current.addEventListener("timeupdate", (e: any) => {
      setCurrentMusic({
        curTime: e.target.currentTime,
      });
    });

    return () => {
      audioRef.current?.pause();
    };
  }, [currentMusic.src]);

  const skipNext = (src: string) => {
    const idx = playList.findIndex((m) => m.src === src);
    if (isRandom) return skipRandom(idx);

    // if we are in last music
    if (idx === playList.length - 1) {
      // go to first one
      setCurrentMusic(playList[0], true);
    } else {
      setCurrentMusic(playList[idx + 1], true);
    }
  };

  const skipPrev = (src: string) => {
    const idx = playList.findIndex((m) => m.src === src);
    if (isRandom) return skipRandom(idx);

    if (idx === 0) {
      setCurrentMusic(playList[playList.length - 1]);
    } else {
      setCurrentMusic(playList[idx - 1]);
    }
  };

  const skipRandom = (idx: number) => {
    const randIdx = Math.floor(Math.random() * playList.length);
    if (randIdx === idx) {
      skipRandom(idx);
    } else {
      setCurrentMusic(playList[randIdx]);
    }
  };

  const [isFavorite, setFavorite] = useState(false);
  const toggleIfFavourite = () => {
    setFavorite((prev) => !prev);
    
  }


  return (
    <div className="fixed w-full bottom-0 inset-x-0 z-10">
      <div className="py-1.5 bg-neutral-800/60 backdrop-blur-xl text-white shadow-black shadow-2xl">
        <div className="container mx-auto px-3 lg:px-0 flex justify-between">
          {/* title and thumbnail */}
          <div className="flex items-center lg:w-4/12 gap-3">
            <div className="w-24 h-24 lg:flex-shrink-0">
              {currentMusic.thumbnail ? (
                <img
                  src={currentMusic.thumbnail}
                  alt={currentMusic.title}
                  className="rounded-lg"
                />
              ) : (
                <DefaultThumbnail />
              )}
            </div>
            <div className="flex flex-col gap-0.5">
              <h6 className=" text-base font-semibold">{currentMusic.title}</h6>
              <span className=" text-md text-gray-400">
                {currentMusic.artist}
              </span>
            </div>  

            {/* Heart Icon to make something one of your favourites */}
            <div className='flex items-center'>
              <button onClick={toggleIfFavourite}>
                {isFavorite ? <AiFillHeart size="23px" color="red"/> : <AiOutlineHeart size="23px" color="red"/>}
              </button>
            </div>
          </div>


          {/* play/pause and next/prev icons */}
          <div className="w-full grid justify-items-center">
            <div className="grid grid-cols-3 gap-3 items-center justify-center">
              <button onClick={() => skipPrev(currentMusic.src)}>
                <TbPlayerSkipBack size={20} className="relative left-4 top-1"/>
              </button>
              <button
                onClick={() => {
                  if (currentMusic.isPlaying) {
                    audioRef.current?.pause();
                  } else {
                    audioRef.current?.play();
                  }
                }}
                className="rounded-full p-1 border"
              >
                {currentMusic.isPlaying ? (
                  <TbPlayerPause size={26} />
                ) : (
                  <TbPlayerPlay size={26} />
                )}
              </button>
              <button className="relative top-1" onClick={() => skipNext(currentMusic.src)}>
                <TbPlayerSkipForward size={20} />
              </button>
            </div>

            {/* progress */}
            <div className="hidden lg:flex w-6/12 flex-col gap-1 justify-center">
              <Slider
                trackStyle={{ background: "red" }}
                handleStyle={{
                  border: "2px solid red",
                  background: "red",
                  boxShadow: "none",
                  opacity: 1,
                }}
                min={0}
                max={currentMusic.duration}
                value={currentMusic.curTime}
                onChange={(val) => {
                  audioRef.current!.currentTime = +val;
                }}
              />
              <div className="flex justify-between text-xs">
                <span>{secondsToMinutes(currentMusic.curTime)}</span>
                <span>{secondsToMinutes(currentMusic.duration)}</span>
              </div>
            </div>
          </div>

          {/* settings */}
          <div className="flex justify-end gap-3 lg:w-3/12">
            <div className="relative flex items-center h-full" ref={volumeRef}>
              
              <button>
                {volume === 0 ? (
                  <TbVolume3 size={20} />
                ) : (
                  <TbVolume size={20} />
                )}
              </button>
              {isVolumeOpen && (
                <div className="flex shadow-lg w-36 h-8 overflow-hidden bg-transparent items-center justify-center">
                  <div className="w-28">
                    <Slider
                      min={0}
                      max={1}
                      step={0.01}
                      value={volume}
                      onChange={(val) => {
                        audioRef.current!.volume = +val;
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
