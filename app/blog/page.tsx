"use client";

import Link from "next/link";
import useSWRFetcher from "../utils/useSWRFetcher";
const API_ENDPOINT = "https://jsonplaceholder.typicode.com/todos/3";

type RandomResult = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function Blog() {
  const { data, isError, isLoading } =
    useSWRFetcher<RandomResult>(API_ENDPOINT);

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <p>BLOG</p>
      <Link href={"/show"}>to .. show</Link>
      <div>
        {data &&
          Array.from(Array(data.userId), (e, i) => {
            return <p key={i}>{i} - Lorem ipsums</p>;
          })}
      </div>
    </>
  );
}

export default Blog;
