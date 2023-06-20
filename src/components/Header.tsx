import Image from 'next/image';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

import logoDark from '@/public/images/logoDark.png';

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="sticky top-0 z-50 h-20 w-full border-b-[1px] border-b-black bg-white px-4 font-titleFont">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
        <Link href="/">
          <div>
            <Image
              src={logoDark}
              alt="logoDark"
              width={80}
              height={80}
              style={{ width: 'auto', height: '80px' }}
            />
          </div>
        </Link>
        <div>
          <ul className="hidden gap-8 text-sm font-semibold uppercase lg:inline-flex">
            <li className="headerLi">Home</li>
            <li className="headerLi">Posts</li>
            <li className="headerLi">Pages</li>
            <li className="headerLi">Features</li>
            <li className="headerLi">Contact</li>
          </ul>
        </div>
        <div className="flex items-center gap-8 text-lg">
          <div className="flex items-center gap-1">
            <img
              className="h-8 w-8 rounded-full"
              src={
                session
                  ? session.user!.image!
                  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/120px-User-avatar.svg.png?20201213175635'
              }
              alt="logo"
            />
            <p className="text-sm font-medium">
              {session ? session?.user!.name : 'Hello Guest'}
            </p>
          </div>
          {session ? (
            <button
              type="button"
              onClick={() => signOut()}
              className="rounded-md border-[1px] border-primaryColor px-4 py-1 text-sm font-semibold uppercase transition-all duration-300 hover:border-secondaryColor hover:bg-secondaryColor hover:text-white active:bg-yellow-600"
            >
              Sign Out
            </button>
          ) : (
            <button
              type="button"
              onClick={() => signIn()}
              className="rounded-md border-[1px] border-primaryColor px-4 py-1 text-sm font-semibold uppercase transition-all duration-300 hover:border-secondaryColor hover:bg-secondaryColor hover:text-white active:bg-yellow-600"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
