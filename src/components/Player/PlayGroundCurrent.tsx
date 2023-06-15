import React from 'react'
import { TbPlayerPause, TbPlayerPlay } from "react-icons/tb";
import { DefaultThumbnail } from "./DefaultThumbnail";
import { usePlayerCurrentListened } from './usePlayerCurrentListened';
import { PlayerProps } from './types';
import { currentListenedMusic } from './musics/currentListenedSongs';

export const PlayGroundCurrent = () => {
  const { playList, setCurrentMusic, currentMusic } = usePlayerCurrentListened();
  return (
    <div className="w-full h-full pb-10 overflow-auto">
      <div className="grid grid-cols-5 gap-10 mt-10 justify-items-center">
        {playList.map((music) => {
          const isPlaying = currentMusic.src === music.src;
          return (

              <div
                key={music.id}
                onClick={() => {
                  setCurrentMusic(music, true);
                }}
                className={`${
                  isPlaying ? "border-red-600" : "border-transparent"
                } gap-2 w-50 h-82 text-xs relative cursor-pointer shadow-lg shadow-red-600 hover:shadow-md hover:shadow-red-600 transition-shadow duration-150 bg-neutral-800 rounded-2xl overflow-hidden text-white border-2`}
              >
                <div className="w-48">
                  {music.thumbnail ? (
                    <img
                      className="rounded-lg h-48 w-48 object-cover"
                      alt={music.title}
                      src={music.thumbnail}
                    />
                  ) : (
                    <DefaultThumbnail />
                  )}
                </div>
                    <div className='flex flex-col h-44 justify-around'>
                        <div className="w-full flex flex-col text-center gap-2 justify-center">
                        <h6 className="font-semibold text-xl">{music.title}</h6>
                        <p className="text-xs text-gray-400">{music.artist}</p>
                        </div>

                        <div className="flex w-full justify-center items-center text-6xl bg-black/20">
                        {isPlaying ? <TbPlayerPause /> : <TbPlayerPlay />}
                        </div>
                    </div>

              </div>
          );
        })}
      </div>
    </div>
  );
};
