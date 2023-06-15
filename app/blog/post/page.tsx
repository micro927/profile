import { NextPage } from "next";

type Props = {
  params: {
    post?: string;
  };
};

const Post: NextPage<Props> = ({ params }) => {
  return (
    <>
      <p>This is Post number {params.post}</p>
    </>
  );
};

export default Post;
