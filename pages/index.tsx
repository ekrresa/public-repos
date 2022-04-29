import Head from 'next/head';
import { Auth } from '../components/Auth';

export default function Home() {
  return (
    <Auth>
      <Head>
        <title>Public Repos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-center">Home</div>
    </Auth>
  );
}
