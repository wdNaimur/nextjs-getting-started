import Link from "next/link";
import Header from "@/app/_components/header";

export default function Home() {
  // console.log("executing"); // Loges in server
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        {/* <a href="/about">About</a> removes from single page, So We need to use Link from next/link  */}
        <Link href="/about">About</Link>
      </p>
    </main>
  );
}
