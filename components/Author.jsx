import React from "react";
import Image from "next/image";


const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-30">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          unoptimized
          alt={author.name}
          src={author.photo.url}
          width="100px"
          height="100px"
          className="align-middle rounded-full"
        />
      </div>
      <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
      <div>
        <p className="text-white text-lg text-justify">{author.bio}</p>
        
      </div>
    </div>
  );
};

export default Author;
