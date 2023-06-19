/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import 'slick-carousel/slick/slick.css';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Banner from '@/components/Banner';
import BannerBottom from '@/components/BannerBottom';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

import { sanityClient, urlFor } from '../../sanity';
import type { Post } from '../../typings';

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  return (
    <div>
      <Head>
        <title>My Blog | Explore the new horizon</title>
        <link rel="icon" href="/smallLogo.ico" />
      </Head>

      <main className="font-bodyFont">
        {/* ============ Header Start here ============ */}
        <Header />
        {/* ============ Header End here ============== */}
        {/* ============ Banner Start here ============ */}
        <Banner />
        {/* ============ Banner End here ============== */}
        <div className="relative mx-auto h-60 max-w-7xl">
          <BannerBottom />
        </div>
        {/* ============ Banner-Bottom End here ======= */}
        {/* ============ Post Part Start here ========= */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 py-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            // eslint-disable-next-line no-underscore-dangle
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="group h-[450px] border-[1px] border-secondaryColor border-opacity-40">
                <div className="h-3/5 w-full overflow-hidden">
                  <Image
                    width={380}
                    height={350}
                    src={urlFor(post.mainImage).url()!}
                    alt="post image"
                    className="h-full w-full object-cover brightness-75 duration-300 group-hover:scale-110 group-hover:brightness-100"
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
                <div className="flex h-2/5 w-full flex-col justify-center">
                  <div className="flex items-center justify-between border-b-[1px] border-b-gray-500 px-5 py-1">
                    <p>{post.title}</p>
                    <img
                      src={urlFor(post.author.image).url()!}
                      alt="authorImg"
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                  <p className="px-4 py-2 text-base">
                    {post.description.substring(0, 60)}... by -{' '}
                    <span className="font-semibold">{post.author.name}</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* ============ Post Part End here =========== */}
        {/* ============ Footer Start here============= */}
        <Footer />
        {/* ============ Footer End here ============== */}
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author -> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }`;

  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    },
  };
};
