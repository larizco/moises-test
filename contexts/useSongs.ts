import * as React from 'react';
import { Context } from './songsContext';

export function useSongs() {
  const context = React.useContext(Context);
  const [songs, setSongs] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  if (!context) {
    throw new Error('useSongs must be used within a SongsContext provider');
  }

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/songs');
      const json = await response.json();
      
      setIsLoading(false);
      setSongs(json);
    };
    fetchData();
  }, []);


  return { songs, isLoading };
}
