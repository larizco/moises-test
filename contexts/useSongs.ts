import * as React from 'react';
import { Context } from './songsContext';
import { Song, SongWithFavorite } from './interfaces';

const API_URL = process.env.NEXT_PUBLIC_SERVER_URL;

const getFavoriteSongs = (): number[] => {
  const favoriteSongsRaw = localStorage.getItem('favoriteSongs');
  return favoriteSongsRaw ? JSON.parse(favoriteSongsRaw) : [];
};

const enrichFavoriteSongs = (songs: Song[]): SongWithFavorite[] => {
  return songs.map((song) => {
    return {
      ...song,
      isFavorite: getFavoriteSongs()?.includes(song.id) || false
    };
  });
};

const fetchSongs = async () => {
  const response = await fetch(API_URL + '/songs');
  const json = await response.json();
  
  return enrichFavoriteSongs(json.songs);
};

const toggleFavoriteSong = (id: number) => {
  const favoriteSongs = getFavoriteSongs();

  if (favoriteSongs.includes(id)) {
    localStorage.setItem('favoriteSongs', JSON.stringify(favoriteSongs.filter((songId: number) => songId !== id)));
  } else {
    localStorage.setItem('favoriteSongs', JSON.stringify([...favoriteSongs, id]));
  }
};

export function useSongs() {
  const context = React.useContext(Context);
  const [songs, setSongs] = React.useState([] as SongWithFavorite[]);
  const [isLoading, setIsLoading] = React.useState(false);

  if (!context) {
    throw new Error('useSongs must be used within a SongsContext provider');
  }

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const songs = await fetchSongs();
      
      setSongs(songs);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const toggleFavorite = (id: number) => {
    toggleFavoriteSong(id);
    setSongs(songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          isFavorite: !song.isFavorite
        };
      }

      return song;
    }));
  };

  return { songs, isLoading, toggleFavorite };
};