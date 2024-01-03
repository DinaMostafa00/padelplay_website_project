import { getHomePage } from "@/sanity/sanity-utils";
import React from "react";
import HeroSection from "@/components/heroSection";
import IntroSection from "@/components/introSection";
import FeatureGrid from "@/components/featureGrid";
import PricingSection from "@/components/pricingSection";
import { Footer } from "@/components/footer";

export default async function Home() {
  const homePage = await getHomePage();

  return (
    <div>
      {homePage.map((HomePageProps) => (
        <div key={HomePageProps._id}>
          <HeroSection homePage={HomePageProps} />

          <section className="absolute z-40 -mt[-100vh] bg-gradient-to-tr from-black via-black to-[#614944] ">
            <div className="mb-25 defaultSpacing">
              <div className="mx-3  md:mx-10 lg:mx-20">
                <IntroSection homePage={HomePageProps} />
                <FeatureGrid homePage={HomePageProps} />
                <PricingSection homePage={HomePageProps} />
              </div>
            </div>
            <Footer />
          </section>
        </div>
      ))}
    </div>
  );
}
