import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { SongWithFavorite } from '../../data/interfaces';
import { useSongs } from '../../data/useSongs';

import NavBar from '../../components/navBar';
import Wrapper from '../../components/wrapper';
import Song from '../../components/song';
import RelatedSongs from '../../components/relatedSongs';

export default function SongPage() {
  const [song, setSong] = React.useState<SongWithFavorite | null>(null);
  const { songs, getSongById } = useSongs(true);

  const router = useRouter();
  const { id } = router.query;

  React.useEffect(() => {
    const getSong = async () => {
      if(id) {
        const result = await getSongById(Number(id));
        setSong(result);
      }
    }

    getSong();
  }, [id]);

  const backgroundPoster = song?.song.files.poster;
  const backgroundPosterStyle = backgroundPoster
    ? { backgroundImage: `url('/assets/images/${backgroundPoster}')` }
    : {};

  return (
    <div className='bg-[#12303B] h-full min-h-[100vh]'>
      <Head>
        <title>MUSE.ai - {song?.song.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar search />

      <div>
        <div 
          style={backgroundPosterStyle}
          className="w-[35vw] h-[70vh] bg-contain bg-no-repeat bg-center absolute top-0 right-8 z-0 opacity-30 z-0 hidden md:block"
        ></div>
        <Wrapper>
          {song && 
            <>
              <Song data={song} />
              <RelatedSongs ids={song.related} allSongs={songs}/>
            </>
          }

          {!song && <p className='text-center mt-10'>Loading...</p>}
        </Wrapper>
      </div>
    </div>
  )
}