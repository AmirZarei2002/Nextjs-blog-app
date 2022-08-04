import React from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import { FcCalendar } from "react-icons/fc";

const PostCard = ({ post }) => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
        <div className="relative shadow-md inline-block w-full h-60 lg:h-80 mb-6">
          <Image
            unoptimized
            alt={post.title}
            className="shadow-lg rounded-t-lg lg:rounded-lg"
            layout="fill"
            src={post.featuredImage.url}
          />
        </div>
        <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-indigo-400 text-3xl font-semibold">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
        <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
          <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
            <Image
              unoptimized
              alt={post.author.name}
              height="30px"
              width="30px"
              className="align-middle rounded-full"
              src={post.author.photo.url}
            />
            <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
              {post.author.name}
            </p>
          </div>
        </div>
        <div className="font-medium text-gray-700 flex my-1 justify-center">
          <FcCalendar className="text-3xl mr-2" />
          <span className="align-middle">
            {moment(post.creatAt).format("MMM DD, YYYY")}
          </span>
        </div>
        <p className="text-center tex-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
          {post.excerpt}
        </p>
        <div className="text-center">
          <Link href={`/post/${post.slug}`}>
            <span className="transition duration-500 ease tranform hover:-translate-7-1 inlineblock bg-indigo-500 font-medium rounded-full text-white px-8 py-3 cursor-pointer">
              Continue Reading
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PostCard;
