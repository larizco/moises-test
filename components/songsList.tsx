import React from "react";
import { Song, SongWithFavorite } from "../contexts/interfaces";
import { useSongs } from "../contexts/useSongs";

import Wrapper from "./wrapper";
import Icon from "./icon";

interface SongCardProps {
  item: SongWithFavorite
  filterFavorites: boolean
};

interface SongsListProps {
  songs: SongWithFavorite[]
  filterFavorites: boolean
};

const SongCard = ({item, filterFavorites} : SongCardProps) => {
  const { id, isFavorite, song } = item;
  const [favorite, setFavorite] = React.useState(isFavorite);
  const { toggleFavorite } = useSongs();

  if (filterFavorites && !favorite) {
    return null;
  }

  const handleHeartClick = () => {
    setFavorite(!favorite);
    toggleFavorite(id);
  };
  
  return (
    <div className='rounded-lg w-[204px] bg-medium-gray'>
      <div className='flex justify-between items-center relative'>
        <div>
          <img className='rounded-t' src={`/assets/images/${song.files.coverArt}`} alt={song.title}/>
          <div className='p-4'>
            <h1 className='text-lg font-semibold'>{song.title}</h1>
            <p className='text-xs text-light-gray'>{song.artist}</p>
          </div>
        </div>

        <div className='absolute bottom-4 right-4 cursor-pointer' onClick={handleHeartClick}>
          <Icon name={favorite ? 'filled-heart' : 'heart'} size='small' />
        </div>
      </div>
    </div>
  );
};

export default function SongsList({ songs, filterFavorites }: SongsListProps) { 

  return (
    <Wrapper>
      <div className='flex flex-wrap gap-8'>
        {songs?.map((song) => (
          <SongCard item={song} key={song.id} filterFavorites={filterFavorites}/>
        ))}
      </div>
    </Wrapper>
  );
};