import React from 'react';
import { GoComment } from 'react-icons/go';
import { IoMdHeartEmpty } from 'react-icons/io';
import { MdOutlineMonitor } from 'react-icons/md';

const BannerBottom = () => {
  return (
    <div className="z-50 mx-auto -mt-20 flex h-auto max-w-7xl flex-col items-center justify-center gap-10 bg-bgColor px-8 py-10 text-white lg:h-60 lg:flex-row lg:gap-0">
      <div className="flex w-full flex-col gap-3 lg:w-3/5">
        <p className="font-bodyFont text-xs font-semibold uppercase text-white/50 md:text-sm">
          My Blog
        </p>
        <h3 className="text-xl font-bold md:text-3xl">
          The Perfect Blend: Exploring Full Stack Development and Everyday Life
        </h3>
        <p className="text-xs text-white/50">Max Ma / 4 weeks ago</p>
      </div>
      <div className="flex w-full items-center justify-center gap-2 lg:w-2/5 lg:gap-8">
        <div className="group flex w-1/3 flex-col items-center">
          <MdOutlineMonitor className="text-3xl text-gray-300 duration-300 group-hover:text-white lg:text-4xl" />
          <p className="font-titleFont text-xs text-white/50 group-hover:text-white lg:text-sm">
            watch on youtube
          </p>
        </div>
        <div className="group flex w-1/3 flex-col items-center justify-center">
          <IoMdHeartEmpty className="text-3xl text-gray-300 duration-300 group-hover:text-white lg:text-4xl" />
          <p className="font-titleFont text-xs text-white/50 group-hover:text-white lg:text-sm">
            like our contents
          </p>
        </div>
        <div className="group flex w-1/3 flex-col items-center justify-center">
          <GoComment className="text-3xl text-gray-300 duration-300 group-hover:text-white lg:text-4xl" />
          <p className="font-titleFont text-xs text-white/50 group-hover:text-white lg:text-sm">
            place comments
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
