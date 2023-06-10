import Image from 'next/image';
import Link from 'next/link';

import logoDark from '@/public/images/logoDark.png';

const Header = () => {
  return (
    <div className="sticky top-0 z-50 h-20 w-full border-b-[1px] border-b-black bg-white px-4 font-titleFont">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
        <Link href="/">
          <div>
            <Image
              width={80}
              height={80}
              src={logoDark}
              alt="logoDark"
              style={{ width: '100%', height: '1.5rem' }}
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
              src="https://www.noormohammad.live/static/media/roundedProfile.477a194221d255c8ce26.png"
              alt="logo"
            />
            <p className="text-sm font-medium">Hello Stranger!</p>
          </div>

          <button
            type="button"
            className="rounded-md border-[1px] border-primaryColor px-4 py-1 text-sm font-semibold uppercase transition-all duration-300 hover:border-secondaryColor hover:bg-secondaryColor hover:text-white active:bg-yellow-600"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
