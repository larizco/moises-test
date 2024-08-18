import React from "react";
import { SongWithFavorite } from "../data/interfaces";
import CustomPlayer from "./customPlayer";

export default function Song({data}: {data: SongWithFavorite}) {
  const { song } = data;


  return (
    <div className='py-20 flex'>
      <img className='rounded-t w-' src={`/assets/images/${song.files.coverArt}`} alt={song.title}/>
      <div className='ml-9 flex flex-col justify-center relative'>
        <CustomPlayer data={data} />
      </div>
    </div>
  )
};
