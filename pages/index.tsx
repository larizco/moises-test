import Head from 'next/head';
import { useSongs } from '../contexts/useSongs';
import NavBar from '../components/navBar';
import Header from '../components/header';
import SongsList from '../components/songsList';

export default function Home() {
  const { songs, isLoading } = useSongs();

  console.log(songs, isLoading);
  
  return (
    <div className='mb-12'>
      <Head>
        <title>MUSE.ai</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavBar search />
      <Header songsNumber={10}/>

      <SongsList songs={songs} />
    </div>
  );
};