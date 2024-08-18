import { Song, SongWithFavorite } from "../interfaces";

const getFavoriteSongs = (): number[] => {
  const favoriteSongsRaw = localStorage.getItem('favoriteSongs');
  return favoriteSongsRaw ? JSON.parse(favoriteSongsRaw) : [];
};

export const enrichFavoriteSongs = (songs: Song[]): SongWithFavorite[] => {
  return songs.map((song) => {
    return {
      ...song,
      isFavorite: getFavoriteSongs()?.includes(song.id) || false
    };
  });
};


export const toggleFavoriteSong = (id: number) => {
  const favoriteSongs = getFavoriteSongs();

  if (favoriteSongs.includes(id)) {
    localStorage.setItem('favoriteSongs', JSON.stringify(favoriteSongs.filter((songId: number) => songId !== id)));
  } else {
    localStorage.setItem('favoriteSongs', JSON.stringify([...favoriteSongs, id]));
  }
};