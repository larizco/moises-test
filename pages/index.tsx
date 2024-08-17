import Head from 'next/head';
import { useSongs } from '../contexts/useSongs';

export default function Home() {
  const { songs, isLoading } = useSongs();

  console.log(songs, isLoading);
  
  return (
    <div>
      <Head>
        <title>MUSE.ai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className='text-white'>
          Your Library
        </h1>
      </main>
    </div>
  )
}
