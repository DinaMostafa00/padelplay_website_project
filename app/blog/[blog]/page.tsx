import { getBlogPage } from "@/sanity/sanity-utils";
import React from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { blog: string };
};
export default async function blogPage({ params }: Props) {
  const slug = params.blog;
  const blog = await getBlogPage(slug);
  return (
    <div>
      <h1> {blog.name} </h1>
      <Image src={blog.image} alt={blog.name} width={1920} height={1080} />

      <div>
        <PortableText value={blog.content} />
      </div>
    </div>
  );
}
