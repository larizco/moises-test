import { SongWithFavorite } from "../data/interfaces";
import Icon from "./icon";

export default function Song({data}: {data: SongWithFavorite}) {
  const { song } = data;

  return (
    <div className='my-20 flex'>
      <img className='rounded-t' src={`/assets/images/${song.files.coverArt}`} alt={song.title}/>
      <div className='ml-9 flex flex-col justify-center'>
        <div className='flex items-center'>
          <Icon name='play' size='large' />
          <div className='ml-9'>
            <h1 className='text-3xl font-semibold mb-3'>
              {song.title}
            </h1>
            <span className='mr-3'> {song.artist} </span> |
            <span className='mx-3'> {song.album.title} </span> | 
            <span className='ml-3'> {song.album.year} </span>
          </div>
        </div>
        <div className='mt-10'>
          <audio controls>
            <source src={`/assets/audio/${song.files.audio}`} type='audio/mp3' />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  )
};
