import React from "react";
import { SongWithFavorite } from "../data/interfaces";
import CustomPlayer from "./customPlayer";

export default function Song({data}: {data: SongWithFavorite}) {
  const { song } = data;


  return (
    <div className='py-20 flex flex-col md:flex-row'>
      <img className='rounded-t' src={`/assets/images/${song.files.coverArt}`} alt={song.title}/>
      <div className='md:ml-9 flex flex-col justify-center relative mt-8 md:mt-0'>
        <CustomPlayer data={data} />
      </div>
    </div>
  )
};
