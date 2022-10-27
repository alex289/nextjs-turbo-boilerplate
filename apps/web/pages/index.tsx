import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container flex flex-col items-center min-h-screen py-16 mx-auto">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          Create <span className="text-indigo-500">T3</span> Turbo
        </h1>
        <div className="flex items-center justify-center w-full pt-6 text-2xl text-blue-500">
          Stuff
        </div>
      </main>
    </>
  );
};

export default Home;
