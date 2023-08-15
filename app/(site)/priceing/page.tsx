import PricingPageLargeScreenTable from "@/components/pricingPageLargeScreenTable";
import PricingPageSmallScreenCards from "@/components/pricingPageSmallScreenCards";
import Link from "next/link";

export default async function pricePage() {
  return (
    <div className="defaultSpacing py-10">
      <h1 className="flex justify-center font-bold text-2xl pt-10  ">
        {"PLANS FOR ALL PACKAGES "}
      </h1>
      <p className="flex justify-center text-lg pb-10 font-thin">
        {
          "Our pricing plans are designed to fit your needs, Choose from our flexible subscription options and enjoy high quality streaming and reliable performance."
        }
      </p>

      {/* large screen rendered herre */}
      <div className="overflow-x-auto hidden md:contents">
        <PricingPageLargeScreenTable />
      </div>

      {/* small screen rendered here */}
      <div className="md:hidden">
        <PricingPageSmallScreenCards />
      </div>
    </div>
  );
}
