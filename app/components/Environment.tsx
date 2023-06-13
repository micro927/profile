import { getUser } from "../api";

async function Environment() {
  const data = await getUser();
  return (
    <>
      <p className="text-xs text-zinc-700">
        this website running on a{" "}
        <span>{process.env.NEXT_PUBLIC_PROJECT_ENV_TITLE}</span>
      </p>
      <p>{data.data[0].userId}</p>
    </>
  );
}

export default Environment;
