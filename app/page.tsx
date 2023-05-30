import Clock from "./components/Clock";

export default function Home() {
  return (
    <main className="min-w-full min-h-screen flex items-center justify-between">
      <div className="w-full flex flex-col items-center">
        <p>Hello, Good Morning</p>
        <Clock />
        <div></div>
      </div>
    </main>
  );
}
