import React from "react";
import { useRouter } from 'next/router'
import { SongWithFavorite } from "../data/interfaces";
import { useSongs } from "../data/useSongs";
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
  const router = useRouter()

  if (filterFavorites && !favorite) {
    return null;
  }

  const handleHeartClick = () => {
    setFavorite(!favorite);
    toggleFavorite(id);
  };
  
  return (
    <div className='rounded-lg w-full bg-gray-medium cursor-pointer sm:w-[47%] md:w-[30%] lg:w-[22%] xl:w-[204px]'>
      <div className='flex justify-between items-center relative'>
        <div className='w-full' onClick={() => router.push(`/songs/${id}`)}>
          <img className='rounded-t w-full' src={`/assets/images/${song.files.coverArt}`} alt={song.title}/>
          <div className='p-4'>
            <h1 className='text-lg font-semibold truncate'>{song.title}</h1>
            <p className='text-xs text-gray-light'>{song.artist}</p>
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
    <div className='flex flex-wrap gap-8'>
      {songs?.map((song) => (
        <SongCard item={song} key={song.id} filterFavorites={filterFavorites}/>
      ))}
    </div>
  );
};