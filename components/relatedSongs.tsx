import { SongWithFavorite } from "../data/interfaces"
import SongsList from "./songsList";

interface RelatedSongsProps {
  ids: number[]
  allSongs: SongWithFavorite[]
};

export default function RelatedSongs({ids, allSongs}: RelatedSongsProps) {
  const relatedSongs = allSongs.filter(song => ids?.includes(song.id));
  if (!relatedSongs.length) return 

  return (
    <div>
      <h2>Other songs</h2>
      <ul className='mt-5'>
        <SongsList songs={relatedSongs} filterFavorites={false} />
      </ul>
    </div>
  )
};