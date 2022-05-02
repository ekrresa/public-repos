import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { Auth } from '../components/Auth';

import { useFetchUserDataQuery } from '../state/features/api/github.slice';
import { useAppSelector } from '../state/app/hooks';
import Book from '../public/book.svg';
import Caret from '../public/down-caret.svg';
import Code from '../public/code.svg';
import Diary from '../public/diary.svg';
import Project from '../public/project.svg';
import Package from '../public/package.svg';
import Star from '../public/star.svg';
import { Header } from '../components/Header';
import { Repository } from '../components/Repository';

export default function Home() {
  // const access_token = useAppSelector(state => state.auth.access_token);
  // const { data, error } = useFetchUserDataQuery(access_token!);
  // console.log({ data, error });

  return (
    <Auth>
      <Head>
        <title>Public Repos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="mt-6 border-b pt-4 bg-white sticky top-0">
        <div className="grid grid-cols-main max-w-[1280px] mx-auto px-4">
          <aside className=""></aside>
          <div className="flex items-center gap-1">
            <div className="flex gap-2 px-2 pb-2 border-b-2 border-transparent">
              <Book className="w-4 mr-1" />
              <p className="text-sm">Overview</p>
            </div>

            <div className="flex gap-2 px-2 pb-2 border-b-2 border-[#f9826c]">
              <Diary className="w-4" />
              <p className="text-sm font-medium">Repositories</p>
            </div>
            <div className="flex gap-2 px-2 pb-2 border-b-2 border-transparent">
              <Project className="w-4" />
              <p className="text-sm">Projects</p>
            </div>
            <div className="flex gap-2 px-2 pb-2 border-b-2 border-transparent">
              <Package className="w-4" />
              <p className="text-sm">Packages</p>
            </div>
            <div className="flex gap-2 px-2 pb-2 border-b-2 border-transparent">
              <Star className="w-4" />
              <p className="text-sm">Stars</p>
            </div>
            <div className="flex gap-2 px-2 pb-2 border-b-2 border-transparent">
              <Code className="w-4" />
              <p className="text-sm">Gists</p>
            </div>
          </div>
        </div>
      </div>

      <main className="mt-4">
        <div className="max-w-[1280px] mx-auto grid grid-cols-main">
          <aside></aside>
          <div>
            <div className="flex gap-6 border-b pb-4">
              <form className="flex-1 overflow-hidden">
                <input
                  className="w-full px-4 py-1 rounded-md border"
                  type="text"
                  placeholder="Find a repository..."
                />
              </form>

              <div className="flex gap-1">
                <button className="bg-shade flex items-center gap-1 rounded-md px-4 text-sm border border-marker">
                  <span>Type</span>
                  <Caret className="w-4" />
                </button>
                <button className="bg-shade flex items-center gap-1 rounded-md px-4 text-sm border border-marker">
                  <span>Language</span>
                  <Caret className="w-4" />
                </button>
                <button className="bg-shade flex items-center gap-1 rounded-md px-4 text-sm border border-marker">
                  <span>Sort</span>
                  <Caret className="w-4" />
                </button>
              </div>

              <button className="bg-forest flex items-center gap-1 font-medium text-sm text-white px-4 rounded-md">
                <Diary className="w-4 fill-white" />
                <span>New</span>
              </button>
            </div>

            <div>
              {Array(20)
                .fill(1)
                .map((_, index) => (
                  <Repository key={index} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </Auth>
  );
}
