import { SongsContext } from '../contexts/songsContext';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SongsContext> 
        <Component {...pageProps} />
      </SongsContext>
    </>
  )
};

export default MyApp;
 