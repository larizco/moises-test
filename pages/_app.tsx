import type { AppProps } from 'next/app';
import { SongsContext } from '../data/songsContext';
import '../styles/globals.css';

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
 