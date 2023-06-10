import Image from 'next/image';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs';

import logoLight from '@/public/images/logoLight.png';

const Footer = () => {
  return (
    <div className="w-full bg-bgColor px-4 py-10 text-white/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={logoLight}
            width={80}
            height={80}
            alt="logo"
            style={{ width: '100%', height: '1.5rem' }}
          />
          <p className="flex items-center gap-1 font-titleFont text-sm">
            <AiOutlineCopyrightCircle className="mt-[1px]" />
            EasyBlog || all rights reserved
          </p>
        </div>

        <div className="flex gap-6">
          <BsYoutube className="h-6 w-6 cursor-pointer text-white/50 duration-300 hover:text-white" />
          <BsFacebook className="h-6 w-6 cursor-pointer text-white/50 duration-300 hover:text-white" />
          <BsGithub className="h-6 w-6 cursor-pointer text-white/50 duration-300 hover:text-white" />
          <BsLinkedin className="h-6 w-6 cursor-pointer text-white/50 duration-300 hover:text-white" />
          <BsTwitter className="h-6 w-6 cursor-pointer text-white/50 duration-300 hover:text-white" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
