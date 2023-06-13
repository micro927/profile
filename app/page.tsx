import Link from "next/link";
import Clock from "./components/Clock";
import Example from "./components/Example";
import Environment from "./components/Environment";

export default function Home() {
  return (
    <main className="min-w-full min-h-screen flex flex-col items-center justify-center">
      <div className="text-6xl text-center font-bold text-transparent hover:text-white bg-clip-text bg-gradient-to-tr from-violet-500 from-10% to-rose-700 to-65% transition duration-300">
        Hello Everyone
      </div>
      <div className="mt-5">
        <Clock />
      </div>
      <div className="text-center">
        <Environment />
        <p className="text-xs text-zinc-700">
          <Link href={"blog/15"}>Click here to see blog #15</Link>
        </p>
        <Example />
      </div>
    </main>
  );
}
