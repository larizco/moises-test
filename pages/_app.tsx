// pages/_app.tsx
import '../styles/globals.css'; // Importa o CSS global com Tailwind CSS
import type { AppProps } from 'next/app'; // Importa o tipo AppProps do Next.js

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />; // Renderiza a página atual
}

export default MyApp;
