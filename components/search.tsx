import React from 'react';
import { useSongs } from '../data/useSongs';
import Icon from './icon';
import { SongWithFavorite } from '../data/interfaces';
import Link from 'next/link';

export default function Search() {
  const [filteredSongs, setFilteredSongs] = React.useState([] as SongWithFavorite[]);
  const { songs } = useSongs(true);

  const searchSongs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    const result = songs.filter((item: SongWithFavorite) => {
      if (!search) return;
      return item.song.title.toLowerCase().includes(search.toLowerCase());
    });

    setFilteredSongs(result);
  };

  const delayedCloseSearch = () => {
    setTimeout(() => setFilteredSongs([]), 400);
  }

  return (
    <div className='relative w-full'>
      <input
        className='w-full pl-10 border-0 rounded-lg h-9 box-border bg-white-transparent-15 text-white transition-colors focus:outline-none focus:bg-white-transparent-25 placeholder:color-white'
        type='text'
        placeholder='Search in your library'
        onChange={searchSongs}
        onBlur={delayedCloseSearch}
      />
      <div className='absolute top-[10px] left-3'>
        <Icon name='search' size='small' />
      </div>

      <ul className='absolute bg-gray-medium w-full mt-1 rounded-lg z-10 px-4'>
        {filteredSongs.map((item: SongWithFavorite) => (
          <Link href={`/songs/${item.id}`}>
            <li key={item.id} className='py-3 list-none text-base border-b	border-[#545454] last:border-0'>
              {item.song.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};