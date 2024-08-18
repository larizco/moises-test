import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useSongs } from '../data/useSongs';
import { SongWithFavorite } from '../data/interfaces';
import Icon from './icon';

export default function CustomPlayer({data}: {data: SongWithFavorite}) {
  const { song } = data;
  const { toggleFavorite } = useSongs();
  const [favorite, setFavorite] = React.useState(data.isFavorite);

  const handleHeartClick = () => {
    setFavorite(!favorite);
    toggleFavorite(data.id);
  };

  return (
    <>
      <div className='flex items-center'>
        <div className='w-14 h-14'></div>
        <div className='ml-9'>
          <div className='flex items-center mb-3'>
            <h1 className='text-3xl font-semibold'>
              {song.title}
            </h1>
            <div className='cursor-pointer ml-4' onClick={handleHeartClick}>
              <Icon name={favorite ? 'filled-heart' : 'heart'} size='small' />
            </div>
          </div>
          <div>
            {song.artist} <span className='mx-3'> | </span> 
            {song.album.title} <span className='mx-3'> | </span>  
            {song.album.year}
          </div>
        </div>
      </div>
      <div className='mt-10 w-full lg:w-[414px]'>
        <AudioPlayer
          src={`/assets/audio/${song.files.audio}`}
          autoPlay={false}
          showSkipControls={false}
          showJumpControls={false}
          customVolumeControls={[]}
          autoPlayAfterSrcChange={false}
        />
      </div>
    </>
  );
};