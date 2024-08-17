import React from 'react';
import Head from 'next/head';
import { useSongs } from '../contexts/useSongs';

import NavBar from '../components/navBar';
import Header from '../components/header';
import SongsList from '../components/songsList';

export default function Home() {
  const { songs, isLoading } = useSongs(true);
  const [ filterFavorites, setFilterFavorites ] = React.useState(false);
  const [ sortedSongs, setSortedSongs ] = React.useState(false);

  const alphabeticalSongs = [...songs].sort((a, b) => a.song.title.localeCompare(b.song.title));

  const toggleViewFavorites = () => {
    setFilterFavorites(!filterFavorites);
  };

  const toggleSortSongs = () => {
    setSortedSongs(!sortedSongs);
  };

  return (
    <div className='mb-12'>
      <Head>
        <title>MUSE.ai</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavBar />
      <Header 
        songsNumber={songs?.length} 
        onViewFavorites={toggleViewFavorites}
        onSortSongs={toggleSortSongs}
      />

      <SongsList 
        songs={sortedSongs ? alphabeticalSongs : songs} 
        filterFavorites={filterFavorites}
      />
    </div>
  );
};