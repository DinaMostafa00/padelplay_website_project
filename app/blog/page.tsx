import { getBlog } from "@/sanity/sanity-utils";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default async function Blog() {
  const blog = await getBlog();

  return (
    <div>
      <div>
        {blog.map((blog) => (
          <Link href={`/blog/${blog.slug}`} key={blog._id}>
            {blog.image && (
              <Image
                src={blog.image}
                alt={blog.name}
                width={750}
                height={300}
              />
            )}
            <div>{blog.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
