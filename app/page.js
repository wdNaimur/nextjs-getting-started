import Link from "next/link";

export default function Home() {
  // console.log("executing"); // Loges in server
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        {/* <a href="/about">About</a> removes from single page, So We need to use Link from next/link  */}
        <Link href="/about">About</Link>
      </p>
    </main>
  );
}
