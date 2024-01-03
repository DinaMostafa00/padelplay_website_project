import React from "react";

interface HomePageProps {
  homePage: {
    featuresTitle: string;
    featuresHeader1: string;
    featuresText1: string;
    featuresHeader2: string;
    featuresText2: string;
    featuresHeader3: string;
    featuresText3: string;
    featuresHeader4: string;
    featuresText4: string;
    featuresHeader5: string;
    featuresText5: string;
    featuresHeader6: string;
    featuresText6: string;
  };
}
const FeatureGrid: React.FC<HomePageProps> = ({ homePage }) => {
  return (
    <div>
      <div>
        <h3 className="text-center font-semibold tracking-wide text-yellow-500 text-xl md:text-2xl xl:text-3xl mb-8">
          {homePage.featuresTitle}
        </h3>
      </div>

      <div className="grid grid-cols-[50px_minmax(200px,_1fr)]  gap-4  xl:grid-cols-[100px_minmax(80px,_1fr)100px_minmax(80px,_1fr)] lg:gap-8  ">
        <div className="imgGridDivStyling">
          <img src="/44.png" alt="HEJ" className="imgInGridHomePage " />
        </div>

        <div>
          <h3 className="gridTitleHomePage">{homePage.featuresHeader1}</h3>
          <p className="gridTextHomePage ">{homePage.featuresText1}</p>
        </div>
        <div className="imgGridDivStyling">
          <img src="/55.png" alt="HEJ" className="imgInGridHomePage " />
        </div>
        <div>
          <h3 className="gridTitleHomePage">{homePage.featuresHeader2}</h3>
          <p className="gridTextHomePage ">{homePage.featuresText2}</p>
        </div>
        <div>
          <img src="/66.png" alt="HEJ" className="imgInGridHomePage " />
        </div>
        <div>
          <h3 className="gridTitleHomePage">{homePage.featuresHeader3}</h3>
          <p className="gridTextHomePage ">{homePage.featuresText3}</p>
        </div>
        <div className="imgGridDivStyling">
          <img src="/77.png" alt="HEJ" className="imgInGridHomePage " />
        </div>
        <div>
          <h3 className="gridTitleHomePage">{homePage.featuresHeader4}</h3>
          <p className="gridTextHomePage ">{homePage.featuresText4}</p>
        </div>
        <div className="imgGridDivStyling">
          <img src="/88.png" alt="HEJ" className="imgInGridHomePage " />
        </div>
        <div>
          <h3 className="gridTitleHomePage">{homePage.featuresHeader5}</h3>
          <p className="gridTextHomePage ">{homePage.featuresText5}</p>
        </div>
        <div className="imgGridDivStyling">
          <img src="/99.png" alt="HEJ" className="imgInGridHomePage " />
        </div>
        <div>
          <h3 className="gridTitleHomePage">{homePage.featuresHeader6}</h3>
          <p className="gridTextHomePage ">{homePage.featuresText6}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;
