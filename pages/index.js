import Head from 'next/head';
import Image from 'next/image';
import Feed from '../components/Feed';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="bg-slate-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram 2.0</title>
        <meta name="description" content="A friendly clone of instagram" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Feed */}
      <Feed />
      {/* Modal */}
    </div>
  );
}
