import { SongWithFavorite } from "../data/interfaces"
import SongsList from "./songsList";

interface RelatedSongsProps {
  ids: number[]
  allSongs: SongWithFavorite[]
};

export default function RelatedSongs({ids, allSongs}: RelatedSongsProps) {
  const relatedSongs = allSongs.filter(song => ids?.includes(song.id));

  return (
    <div>
      <h2>Other albums</h2>
      <ul>
        <SongsList songs={relatedSongs} filterFavorites={false} />
      </ul>
    </div>
  )
};