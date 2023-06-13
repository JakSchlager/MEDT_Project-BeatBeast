import React from 'react'
import { createContext, FC, ReactNode, useContext, useState } from "react";
import { currentListenedMusic } from './musics/currentListenedSongs';
import { Player } from "./Player";
import { CurrentMusicType, PlayerContextType } from "./types";
import { defaultMusic } from "./utils";

const PlayerContext = createContext<PlayerContextType>({
  playList: currentListenedMusic,
  currentMusic: defaultMusic,
  setCurrentMusic: () => {},
});

export const usePlayerCurrentListened = () => useContext(PlayerContext);

export const PlayerProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [current, setCurrent] = useState<CurrentMusicType>(defaultMusic);

  //update(volume and play/pause) and replace currentMusic
  const setCurrentMusic = (val: Partial<CurrentMusicType>, replace = false) => {
    if (replace && val.src !== current.src) {
      setCurrent(val as CurrentMusicType);
    } else {
      setCurrent((prev) => ({ ...prev, ...val }));
    }
  };

  return (
    <PlayerContext.Provider
      value={{ currentMusic: current, setCurrentMusic, playList: currentListenedMusic }}
    >
      {children}
      {current.src && <Player />}
    </PlayerContext.Provider>
  );
};
