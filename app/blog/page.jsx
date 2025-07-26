import Link from "next/link";
import React from "react";

export default function BlogPage() {
  return (
    <main>
      <h1>The Blog</h1>
      <p>
        <Link href={`/blog/blog-1`}>Blog 1</Link>
      </p>
      <p>
        <Link href={`/blog/blog-2`}>Blog 2</Link>
      </p>
      <p>
        <Link href={`/blog/blog-3`}>Blog 3</Link>
      </p>
    </main>
  );
}
