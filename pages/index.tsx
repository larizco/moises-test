import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>MUSE.ai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className='text-white'>
          Your Library
        </h1>
      </main>
    </div>
  )
}
