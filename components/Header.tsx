import Image from 'next/image';
import Link from 'next/link';

import SearchHeader from '../public/search.svg';
import Hamburger from '../public/hamburger.svg';
import Bell from '../public/bell.svg';
import Plus from '../public/plus.svg';
import Caret from '../public/down-caret.svg';

export function Header() {
  return (
    <header className="bg-[#24292e] flex flex-wrap items-center justify-between text-white py-3 px-4 md:flex-nowrap md:px-6">
      <button className="md:hidden">
        <Hamburger />
      </button>

      <Link href="/">
        <a className="md:mr-4">
          <Image className="logo" src="/header.png" alt="" width={32} height={32} />
        </a>
      </Link>

      <div className="flex-1 basis-[746px] order-10 hidden md:flex md:items-center md:order-none md:mr-auto">
        <form className="flex items-center border border-khaki rounded-md mb-4 shadow-none py-2 pr-3 md:max-w-[18rem] md:focus-within:max-w-[30rem] md:mb-0 transition-all">
          <input
            className="bg-inherit px-[6px] flex-1 shadow-none outline-none text-[0.9rem] font-medium"
            placeholder="Search or jump to..."
          />
          <SearchHeader />
        </form>

        {/* <!-- NAVIGATION - START --> */}
        <nav role="navigation" className="md:ml-5">
          <ul className="flex flex-col md:flex-row text-sm font">
            <li className="md:mr-4">
              <a href="#">Pull requests</a>
            </li>
            <li className="md:mr-4">
              <a href="#">Issues</a>
            </li>
            <li className="md:mr-4">
              <a href="#">Marketplace</a>
            </li>
            <li className="md:mr-4">
              <a href="#">Explore</a>
            </li>
          </ul>
        </nav>
        {/* <!-- NAVIGATION - END --> */}
      </div>

      <div className="relative flex items-center cursor-pointer mr-4">
        <Bell className="fill-white w-4 hover:fill-faded" />
        <span className="absolute border-2 border-primary bg-link w-[14px] h-[14px] rounded-full -top-[7px] left-[5px]"></span>
      </div>

      <div className="flex items-center gap-[3px] mr-4">
        <Plus className="fill-white w-4" />
        <Caret className="fill-white w-4" />
      </div>

      <div className="flex items-center relative">
        <div className="w-5 aspect-square rounded-full bg-white"></div>
        <Caret className="fill-white w-4" />
      </div>
    </header>
  );
}
