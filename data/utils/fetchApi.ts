import { SongWithFavorite } from "../interfaces";
import { enrichFavoriteSongs } from "./favorites";

export const fetchSongs = async (): Promise<SongWithFavorite[]> => {
  try {
    const response = await fetch('/api/songs');
    const json = await response.json();
  
    return enrichFavoriteSongs(json);
  } catch (error) {
    console.error('Error fetching songs:', error);
    return [];
  };

};

export const fetchSongById = async (id: number): Promise<SongWithFavorite | null> => {
  try {
    const response = await fetch(`/api/song/${id}`);
    const json = await response.json();
    return enrichFavoriteSongs([json])[0];
  } catch (error) {
    console.error('Error fetching songs:', error);
    return null
  }
};