import { getUser } from "../api";

async function Environment() {
  const data = await getUser(1);
  return (
    <>
      <p className="text-xs text-zinc-700">
        this website running on a{" "}
        <span>{process.env.NEXT_PUBLIC_PROJECT_ENV_TITLE}</span>
      </p>
      <p>this content was rendered from server-side</p>
      <p>{data.userId}</p>
    </>
  );
}

export default Environment;
