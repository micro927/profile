import { NextPage } from "next";

const Post: NextPage<any> = ({ params }) => {
  return (
    <>
      <p>This is Post number {params.post}</p>
    </>
  );
};

export default Post;
