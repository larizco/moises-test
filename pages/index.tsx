import React from 'react';
import Head from 'next/head';
import { useSongs } from '../contexts/useSongs';

import NavBar from '../components/navBar';
import Header from '../components/header';
import SongsList from '../components/songsList';

export default function Home() {
  const { songs, isLoading } = useSongs();
  const [ filterFavorites, setFilterFavorites ] = React.useState(false);

  const toggleViewFavorites = () => {
    setFilterFavorites(!filterFavorites);
  };

  return (
    <div className='mb-12'>
      <Head>
        <title>MUSE.ai</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavBar search />
      <Header songsNumber={songs?.length} onViewFavorites={toggleViewFavorites}/>
      <SongsList songs={songs} filterFavorites={filterFavorites} />
    </div>
  );
};