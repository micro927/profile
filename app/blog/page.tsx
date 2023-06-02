"use client";

import useSWRFetcher from "../utils/useSWRFetcher";
const API_ENDPOINT = "http://localhost:7878/random";

type RandomRes = {
  num: number;
  datetime: string;
};

function Blog() {
  const { data, isError, isLoading } = useSWRFetcher<RandomRes>(API_ENDPOINT);

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <p>BLOG</p>
      <div>{data?.datetime}</div>
      <div>
        {data &&
          Array.from(Array(data.num), (e, i) => {
            return <p key={i}>{i} - Lorem ipsums</p>;
          })}
      </div>
    </>
  );
}

export default Blog;
