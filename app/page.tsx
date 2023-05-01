import { getHomePage } from "@/sanity/sanity-utils";
import Link from "next/link";
import React from "react";

export default async function Home() {
  const homePage = await getHomePage();
  return (
    <div>
      {homePage.map((homePage) => (
        <div key={homePage._id}>
          <div className="relative h-screen">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
              autoPlay
              muted
              loop
            >
              <source src="/v1.mp4" type="video/mp4" />
            </video>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
              <h1 className="text-4xl font-bold mb-4">{homePage.heroText}</h1>
              <button className="bg-white text-black rounded-full py-4 px-8 font-bold hover:bg-gray-100 transition-colors duration-300 ease-in-out">
                Get started
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
