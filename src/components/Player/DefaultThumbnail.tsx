import React from 'react'
import { TbMusic } from "react-icons/tb";

export const DefaultThumbnail = () => {
  return (
    <div className="bg-red-600 text-white justify-center items-center text-2xl rounded-lg flex w-full h-40">
      <TbMusic size={32}/>
    </div>
  );
};
