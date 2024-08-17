import Image from "next/image";
import { Song } from "../contexts/interfaces";
import { Wrapper } from "./wrapper";

interface SongsListProps {
  songs: Song[]
};

const SongCard = ({item}: {item: Song}) => {
  const { id, song } = item;

  return (
    <div className='rounded-lg w-[204px] bg-medium-gray'>
      <div className='flex justify-between items-center'>
        <div>
          <img className='rounded-t' src={`/assets/images/${song.files.coverArt}`} alt={song.title}/>
          <div className='p-4'>
            <h1 className='text-lg font-semibold'>{song.title}</h1>
            <p className='text-xs text-light-gray'>{song.artist}</p>
          </div>
        </div>

        {/* <button className='bg-transparent-white text-white px-6 py-2 rounded-full text-sm' onClick={() => console.log(id)}>
          Favorite
        </button> */}
      </div>
    </div>
  );
};

export default function SongsList({ songs }: SongsListProps) { 
  console.log(songs);
  return (
    <Wrapper>
      <div className='flex flex-wrap gap-8'>
        {songs?.map((song) => (
          <SongCard item={song} />
        ))}
      </div>
    </Wrapper>
  );
};