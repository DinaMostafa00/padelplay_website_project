import React from "react";

interface HomePageProps {
  homePage: {
    introText: string;
    introSubText: string;
  };
}
const IntroSection: React.FC<HomePageProps> = ({ homePage }) => {
  return (
    <div>
      <div className="space-y-7 py-20">
        <h1 className="text-center font-semibold tracking-wide text-white text-xl md:text-2xl lg:text-3xl">
          {homePage.introText}
        </h1>

        <h2 className="text-center font-thin tracking-wide text-white text-lg md:text-xl lg:text-2xl mx-2 ">
          {homePage.introSubText}
        </h2>
      </div>
    </div>
  );
};

export default IntroSection;
