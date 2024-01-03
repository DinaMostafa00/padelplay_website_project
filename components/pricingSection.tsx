import React from "react";
import Link from "next/link";

interface HomePageProps {
  homePage: {
    priceTextBasic: string;
    priceTextEssential: string;
    priceTextPremium: string;
  };
}
const PricingSection: React.FC<HomePageProps> = ({ homePage }) => {
  return (
    <div>
      <div className="mt-52">
        <h2 className="text-center text-3xl font-bold tracking-wide text-white pb-3 pt-3">
          PRICING PLANS AND PACKAGES
        </h2>
        <p className="text-center text-xl font-thin tracking-wide text-white pb-6">
          Our pricing plans are designed to fit your needs, choose from our
          flexible subscription options and enjoy high quality streaming and
          reliable performance.
        </p>
      </div>

      <div className="mt-1 mb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
        <div className="priceBox">
          <h3 className="priceTitle">BASIC</h3>
          <p className="priceText">{homePage.priceTextBasic}</p>
          <Link className="headerLink" href="/priceing">
            <button className="yellowButton">READ MORE</button>
          </Link>
        </div>

        <div className="priceBox">
          <h3 className="priceTitle">ESSENTIAL</h3>
          <p className="priceText">{homePage.priceTextEssential}</p>
          <Link className="headerLink" href="/priceing">
            <button className="yellowButton">READ MORE</button>
          </Link>
        </div>

        <div className="priceBox ">
          <h3 className="priceTitle">PREMIUM</h3>
          <p className="priceText">{homePage.priceTextPremium}</p>
          <Link className="headerLink" href="/priceing">
            <button className="yellowButton">READ MORE</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
