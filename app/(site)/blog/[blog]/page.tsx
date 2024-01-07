import { getBlogPage } from "@/sanity/sanity-utils";
import React from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

type Props = {
  params: { blog: string };
};

export default async function blogPage({ params }: Props) {
  const slug = params.blog;
  const blog = await getBlogPage(slug);

  return (
    <div className="defaultSpacing  py-10 ">
      <h1 className=" font-bold  text-lg lg:text-2xl py-2  lg:py-7 flex justify-center">
        {blog.name}
      </h1>
      <div className=" mb-2 lg:mb-5 flex flex-col">
        <Image
          src={blog.image}
          alt={blog.name}
          width={950}
          height={300}
          className="mx-auto "
        />

        <p className="font-thin text-gray-600 italic pl-3  lg:pl-64  ">
          {blog.imgCredit}
        </p>
      </div>

      <div className="flex-col items-center px-3 lg:px-48 ">
        <PortableText value={blog.content} />
      </div>

      {/* <p className="font-thin text-gray-600 italic pl-3 lg:pl-64">
        {blog.createdAt
          ? blog.createdAt.toLocaleDateString("en-US", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })
          : "Date is invalid"}
      </p> */}

      <p className="font-bold pt-9"> {"CONNECT ON SOCIAL MEDIA"}</p>
      <div className=" md:flex md:justify-between">
        <div className="flex items-center mb-4">
          <Link href={"https://www.instagram.com/padelplay.nu/"}>
            <Image
              src="/instagram.svg"
              alt="Instagram Logo"
              width={50}
              height={50}
              className="ml-2  hover:scale-105"
            />
          </Link>
          <Link href={"https://www.linkedin.com/company/padelplay/"}>
            <Image
              src="/linkedin.svg"
              alt="linkedin Logo"
              width={50}
              height={50}
              className="ml-2  hover:scale-105"
            />
          </Link>
        </div>
        <Link href={"/blog"}>
          <button className="transparentButton">{"READ MORE ARTICLES"}</button>
        </Link>
      </div>
    </div>
  );
}

///text in titles
