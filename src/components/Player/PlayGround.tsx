import React from 'react'
import { TbPlayerPause, TbPlayerPlay } from "react-icons/tb";
import { DefaultThumbnail } from "./DefaultThumbnail";
import { usePlayer } from "./usePlayer";
import { PlayerProps } from './types';
import { musics } from './musics';

export const PlayGround = () => {
  const { playList, setCurrentMusic, currentMusic } = usePlayer();
  return (
    <div className="w-full h-full pb-10 overflow-auto">
      <div className="grid grid-cols-3 gap-10 mt-10 justify-items-center">
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
                } flex gap-2 w-100 h-40 text-xs relative cursor-pointer transition-shadow duration-150 shadow-xl hover:shadow-md bg-neutral-850 rounded-2xl overflow-hidden text-white border-2`}
              >
                <div className="w-40 h-24">
                  {music.thumbnail ? (
                    <img
                      className="rounded-lg h-40 w-40 object-cover"
                      alt={music.title}
                      src={music.thumbnail}
                    />
                  ) : (
                    <DefaultThumbnail />
                  )}
                </div>
                <div className="w-6/12 flex flex-col text-center gap-2 justify-center">
                  <h6 className="font-semibold text-sm">{music.title}</h6>
                  <p className="text-xs text-gray-400">{music.artist}</p>
                </div>
                <div className="flex w-20 justify-center items-center text-6xl bg-black/10">
                  {isPlaying ? <TbPlayerPause /> : <TbPlayerPlay />}
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
};
