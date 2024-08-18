import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { SongWithFavorite } from '../../data/interfaces';

import NavBar from '../../components/navBar';
import Wrapper from '../../components/wrapper';
import Song from '../../components/song';
import { useSongs } from '../../data/useSongs';
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

  if(!song) {
    return false
  }
  
  return (
    <div>
      <Head>
        <title>MUSE.ai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar search />

      
      <Wrapper>
        <Song data={song} />
        <RelatedSongs ids={song.related} allSongs={songs}/>
      </Wrapper>
    </div>
  )
}