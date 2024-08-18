import * as React from 'react';
import { Context } from './songsContext';
import { SongWithFavorite } from './interfaces';

import { fetchSongById, fetchSongs } from './utils/fetchApi';
import { toggleFavoriteSong } from './utils/favorites';


export function useSongs(shouldFetch = false) {
  const context = React.useContext(Context);
  const [songs, setSongs] = React.useState([] as SongWithFavorite[]);
  const [isLoading, setIsLoading] = React.useState(false);

  if (!context) {
    throw new Error('useSongs must be used within a SongsContext provider');
  }

  React.useEffect(() => {
    if(shouldFetch) {
      const fetchData = async () => {
        setIsLoading(true);

        try {
          const fetchedSongs = await fetchSongs();
          setSongs(fetchedSongs);
        } catch (error) {
          console.error('Error fetching songs:', error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }
  }, [shouldFetch]);

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

  const getSongById = (id: number) => {
    return fetchSongById(id);
  };

  return { songs, isLoading, toggleFavorite, getSongById };
};