import React from "react";
import Link from "next/link";

interface HomePageProps {
  homePage: {
    heroText: string;
  };
}
const HeroSection: React.FC<HomePageProps> = ({ homePage }) => {
  return (
    <div className="relative ">
      <section className=" sticky h-screen top-0 mx-auto flex  items-center justify-between px-8">
        <div>
          <video
            className="fixed top-0 left-0 w-full h-full object-cover z-0"
            autoPlay
            muted
            loop
          >
            <source src="/v1.mp4" type="video/mp4" />
          </video>

          <div className=" fixed lg:bottom-25 lg:left-20 ">
            <h1 className=" font-bold lg:text-4xl  md:text-4xl xl:text-4xl bottom-32 left-0 mx-6 xl:mr-60 mb-6">
              {homePage.heroText}
            </h1>
            <Link href="/product">
              <button className=" fixed transparentButton mt-3 ml-5">
                GET STARTED
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
