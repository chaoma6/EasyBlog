/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/no-unstable-nested-components */
import type { GetStaticProps } from 'next';
import React from 'react';
import PortableText from 'react-portable-text';
import type { Post } from 'typings';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import { sanityClient, urlFor } from '../../../sanity';

interface Props {
  post: Post;
}

const PostPage = ({ post }: Props) => {
  const formattedPublishedAt = new Date(post.publishedAt).toLocaleDateString(
    'en-US',
    {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }
  );

  return (
    <div>
      <Header />
      {/* Cover Image */}
      <img
        className="h-96 w-full object-cover"
        src={urlFor(post.mainImage).url()!}
        alt="CoverImage"
      />
      {/* Article Content */}
      <div className="mx-auto max-w-3xl">
        <article className="mx-auto w-full bg-secondaryColor/10 p-5">
          <h1 className="mb-3 mt-10 border-b-[1px] border-b-cyan-800 font-titleFont text-[32px] font-medium">
            {post.title}
          </h1>
          <h2 className="mb-2 font-bodyFont text-[18px] text-gray-500">
            {post.description}
          </h2>
          <div className="flex items-center gap-2">
            <img
              src={urlFor(post.author.image).url()}
              alt="Author Avatar"
              className="h-12 w-12 rounded-full bg-red-400 object-cover"
            />
            <p className="font-bodyFont text-base">
              Blog post by{' '}
              <span className="font-bold text-secondaryColor">
                {post.author.name}
              </span>{' '}
              - Published at {formattedPublishedAt}
            </p>
          </div>
          <div className="mt-10">
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              content={post.body}
              serializers={{
                h1: (props: any) => (
                  <h1
                    className="my-5 font-titleFont text-3xl font-bold"
                    {...props}
                  />
                ),
                h2: (props: any) => (
                  <h2
                    className="my-5 font-titleFont text-2xl font-bold"
                    {...props}
                  />
                ),
                h3: (props: any) => (
                  <h3
                    className="my-5 font-titleFont text-2xl font-bold"
                    {...props}
                  />
                ),
                li: ({ children }: any) => (
                  <li className="ml-4 list-inside list-disc">{children}</li>
                ),
                link: ({ href, children }: any) => (
                  <a className="text-cyan-500 hover:underline" href={href}>
                    {children}
                  </a>
                ),
              }}
            />
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default PostPage;

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug
  }`;

  const posts = await sanityClient.fetch(query);
  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.slug.current,
      },
    };
  });
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    publishedAt,
    title,
    author -> {
      name,
      image
    },
    description,
    mainImage,
    slug,
    body
  }`;

  const post = await sanityClient.fetch(query, { slug: params?.slug });

  if (!post) {
    return {
      notFound: true,
    };
  }

  const formattedPublishedAt = new Date(post.publishedAt).toLocaleDateString(
    'en-US',
    {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }
  );

  return {
    props: {
      post: {
        ...post,
        publishedAt: formattedPublishedAt,
      },
    },
    revalidate: 60,
  };
};
