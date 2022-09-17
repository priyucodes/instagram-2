import Image from 'next/image';

// v1 heroicons
// import {
//   SearchIcon,
//   PlusCircleIcon,
//   UserGroupIcon,
//   HeartIcon,
//   PaperAirplaneIcon,
//   MenuIcon,
// } from '@heroicons/react/outline';
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  HeartIcon,
  UserGroupIcon,
  PaperAirplaneIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';
import { HomeIcon } from '@heroicons/react/24/solid';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
const Header = () => {
  const { data: session, status } = useSession();
  return (
    <header className="sticky top-0 shadow-md border-b bg-white z-50">
      <div className="flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto">
        {/* Left */}
        {/* Added relative so the nextImage is absolute to its parent container */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            alt="instagram logo"
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* flex-shrink-0 prevents the container/image to be shrinekd  */}
        <div className="relative lg:hidden w-10 flex-shrink-0 cursor-pointer">
          <Image
            alt="instagram logo"
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Search Input Field */}

        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              // tailwind/form plugin overwrites some of these styles
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <Link href="/">
            <HomeIcon className="navBtn" />
          </Link>
          <Bars3Icon className="h-8 md:hidden cursor-pointer" />

          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn -rotate-45" />
                <div className="absolute bg-red-500 -top-2 -right-2 rounded-full text-xs w-5 h-5 flex items-center justify-center animate-pulse text-white">
                  5
                </div>
              </div>
              <PlusCircleIcon className="navBtn" />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={session.user?.image || ''}
                alt="profile pic"
                className="h- w-10 rounded-full cursor-pointer"
                onClick={signOut}
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
