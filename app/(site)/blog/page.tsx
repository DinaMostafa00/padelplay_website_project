import { getBlog } from "@/sanity/sanity-utils";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import blog from "@/sanity/schemas/blog-schema";

export default async function Blog() {
  const blogs = await getBlog();
  const latestBlog = blogs[0]; // Assuming the latest blog is the first item in the array
  const otherBlogs = blogs.slice(1); // Remove the latest blog from the array

  return (
    <div className="defaultSpacing ">
      <div className="flex justify-center  py-10 lg:py-20 hover:scale-105">
        <Link href={`/blog/${latestBlog.slug}`} key={latestBlog._id}>
          <div className="border-2 border-yellow-500 p-2  lg:p-5 hover:scale-105 hover:border-white transition ">
            {latestBlog.image && (
              <div className="relative">
                <Image
                  src={latestBlog.image}
                  alt={latestBlog.name}
                  width={750}
                  height={300}
                  className="object-fit"
                />

                <div className="font-bold hover:text-yellow-500 flex justify-between pt-7 pl-2">
                  <p>{latestBlog.name}</p>

                  <span className="material-symbols-outlined text-yellow-500">
                    arrow_forward_ios
                  </span>
                </div>
              </div>
            )}
          </div>
        </Link>
      </div>

      <div className="borderBox  ">
        <h2 className="px-4 font-bold text-yellow-500 lg:text-lg">
          {" YOU CAN ALSO READ"}
        </h2>
        <div className="grid grid-cols-2 gap-2 lg:py-8 ">
          {otherBlogs.map((blog) => (
            <Link
              href={`/blog/${blog.slug}`}
              key={blog._id}
              className="p-3 hover:scale-105"
            >
              <div className="flex items-center font-light hover:text-yellow-500 ">
                {blog.name}

                <span className="material-symbols-outlined text-yellow-500 text-sm ml-2 text-right">
                  arrow_forward_ios
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
