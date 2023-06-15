"use client";

import Image, { ImageLoader } from "next/image";

function Something() {
  // throw Error;
  const imageLoader: ImageLoader = ({ src, width, quality }) => {
    return `https://plus.unsplash.com/${src}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=${width}&q=${
      quality || 75
    }`;
  };

  return (
    <>
      <p>this is show page</p>
      <div>
        <Image
          src="premium_photo-1686514714138-51925a219605"
          width={300}
          height={500}
          quality={75}
          alt="sky"
          loader={imageLoader}
        />
      </div>
    </>
  );
}

export default Something;
