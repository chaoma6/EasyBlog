import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider from 'react-slick';

import bannerImgFour from '@/public/images/bannerImgFour.jpg';
import bannerImgOne from '@/public/images/bannerImgOne.jpg';
import bannerImgThree from '@/public/images/bannerImgThree.jpg';
import bannerImgTwo from '@/public/images/bannerImgTwo.jpg';

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-32 right-10 z-30 h-8 w-44 overflow-hidden border-[1px] border-gray-900 bg-black/50 px-2 shadow-btnShadow hover:border-gray-800 hover:bg-black"
      onClick={onClick}
    >
      <div className="group relative flex h-full w-full cursor-pointer items-center justify-end text-sm uppercase text-gray-300  ">
        <span className="absolute -translate-x-28 translate-y-0 transition-transform duration-500 group-hover:-translate-y-7">
          next
        </span>
        <span className="absolute -translate-x-28 translate-y-7 transition-transform duration-500 group-hover:translate-y-0">
          next
        </span>
        <span className="text-lg">
          <FaChevronRight />
        </span>
      </div>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-32 left-10 z-30 h-8 w-44 overflow-hidden border-[1px] border-gray-900 bg-black/50 px-2 shadow-btnShadow hover:border-gray-800 hover:bg-black"
      onClick={onClick}
    >
      <div className="group relative flex h-full w-full cursor-pointer items-center justify-between text-sm uppercase text-gray-300  ">
        <span className="text-lg">
          <FaChevronLeft />
        </span>
        <span className="absolute translate-x-24 translate-y-0 transition-transform duration-500 group-hover:-translate-y-7">
          previous
        </span>
        <span className="absolute translate-x-24 translate-y-7 transition-transform duration-500 group-hover:translate-y-0">
          previous
        </span>
      </div>
    </div>
  );
}

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="relative h-auto w-full md:h-[650px]">
      <Slider {...settings}>
        <div>
          <Image
            className="h-auto w-full object-cover md:h-[650px]"
            src={bannerImgOne}
            loading="eager"
            alt="bannerImgOne"
            priority
          />
        </div>
        <div>
          <Image
            className="h-auto w-full object-cover md:h-[650px]"
            src={bannerImgTwo}
            loading="lazy"
            alt="bannerImgTwo"
          />
        </div>
        <div>
          <Image
            className="h-auto w-full object-cover md:h-[650px]"
            src={bannerImgThree}
            loading="lazy"
            alt="bannerImgThree"
          />
        </div>
        <div>
          <Image
            className="h-auto w-full object-cover md:h-[650px]"
            src={bannerImgFour}
            loading="lazy"
            alt="bannerImgFour"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
