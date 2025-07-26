import React from "react";

export default function SingleBlogPost({ params }) {
  return (
    <main>
      <h1>SingleBlogPost</h1>
      <p>{params.slug}</p>
    </main>
  );
}
