/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/no-unstable-nested-components */
import type { GetStaticProps } from 'next';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import PortableText from 'react-portable-text';
import type { Post } from 'typings';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import { sanityClient, urlFor } from '../../../sanity';

interface Props {
  post: Post;
}

type Inputs = {
  _id: string;
  name: string;
  email: string;
  comment: string;
};

const PostPage = ({ post }: Props) => {
  const { data: session } = useSession();
  const [submitted, setSubmitted] = useState(false);
  const [userErr, setuserErr] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => setSubmitted(true))
      .catch((_) => setSubmitted(false));
  };

  const formattedPublishedAt = new Date(post.publishedAt).toLocaleDateString(
    'en-US',
    {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }
  );

  const handleUserErr = () => {
    if (!session) {
      setuserErr('Please sign in to comment!');
    } else {
      setuserErr('');
    }
  };

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
      <div className="mx-auto mb-10 max-w-3xl">
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
              projectId={
                process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'rzwcrflf'
              }
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
        <hr className="mx-auto my-5 max-w-lg border-[1px] border-secondaryColor" />
        {submitted ? (
          <div className="mx-auto my-10 flex flex-col items-center gap-2 bg-bgColor p-10 text-white">
            <h1 className="text-2xl font-bold">
              Thank you for submitting your comment!
            </h1>
            <p>Once it has been approved, it will appear below!</p>
          </div>
        ) : (
          <div>
            <p className="font-titleFont text-xs font-bold uppercase text-secondaryColor">
              Enjoyed this article?
            </p>
            <h3 className="font-titleFont text-3xl font-bold">
              Leave a comment below!
            </h3>
            <hr className="mt-2 py-3" />
            {/* Form */}
            {/* Generating Id for hooks form */}
            <input
              {...register('_id')}
              type="hidden"
              name="_id"
              value={post._id}
            />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-7 flex flex-col gap-6"
            >
              <label className="flex flex-col" htmlFor="nameInput">
                <span className="font-titleFont text-base font-semibold">
                  Name
                </span>
                <input
                  {...register('name', { required: true })}
                  id="nameInput"
                  type="text"
                  className="border-b-[1px] border-secondaryColor px-4 py-1 text-base shadow-secondaryColor outline-none placeholder:text-sm focus-within:shadow-xl"
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </label>
              <label className="flex flex-col" htmlFor="emailInput">
                <span className="font-titleFont text-base font-semibold">
                  Email
                </span>
                <input
                  {...register('email', { required: true })}
                  id="emailInput"
                  type="email"
                  className="border-b-[1px] border-secondaryColor px-4 py-1 text-base shadow-secondaryColor outline-none placeholder:text-sm focus-within:shadow-xl"
                  placeholder="Enter your Email"
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </label>
              <label className="flex flex-col" htmlFor="textareaInput">
                <span className="font-titleFont text-base font-semibold">
                  Comment
                </span>
                <textarea
                  {...register('comment', { required: true })}
                  id="textareaInput"
                  className="border-b-[1px] border-secondaryColor px-4 py-1 text-base shadow-secondaryColor outline-none placeholder:text-sm focus-within:shadow-xl"
                  placeholder="Enter your comments"
                  rows={6}
                />
                {errors.comment && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </label>
              {session && (
                <button
                  type="submit"
                  className="w-full rounded-sm bg-bgColor py-2 font-titleFont text-base font-semibold uppercase tracking-wider text-white duration-300 hover:bg-secondaryColor"
                >
                  Submit
                </button>
              )}
            </form>
            {!session && (
              <button
                onClick={handleUserErr}
                type="button"
                className="w-full rounded-sm bg-bgColor py-2 font-titleFont text-base font-semibold uppercase tracking-wider text-white duration-300 hover:bg-secondaryColor"
              >
                Submit
              </button>
            )}
            {userErr && (
              <p className="my-1 animate-bounce px-4 text-center font-titleFont text-sm font-semibold text-red-500 underline underline-offset-2">
                {' '}
                <span className="mr-2 text-base font-bold italic">!</span>
                {userErr}
              </p>
            )}
            {/* {comments} */}
            <div className="mx-auto my-10 flex w-full flex-col space-y-2 p-10 shadow-lg shadow-bgColor">
              <h3 className="font-titleFont text-3xl font-semibold">
                Comments
              </h3>
              <hr />
              {post.comments.map((comment) => (
                <div key={comment._id}>
                  <p>
                    <span className="text-secondaryColor"> {comment.name}</span>{' '}
                    {comment.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
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
    "comments":*[_type == "comment" && post._ref == ^._id && approved == true],
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
