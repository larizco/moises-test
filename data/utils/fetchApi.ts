import { SongWithFavorite } from "../interfaces";
import { enrichFavoriteSongs } from "./favorites";

const API_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const fetchSongs = async (): Promise<SongWithFavorite[]> => {
  const response = await fetch(API_URL + '/songs');
  const json = await response.json();
  
  return enrichFavoriteSongs(json.songs);
};

export const fetchSongById = async (id: number): Promise<SongWithFavorite> => {
  const response = await fetch(API_URL + `/songs/${id}`);
  const json = await response.json();

  return enrichFavoriteSongs([json])[0];
};