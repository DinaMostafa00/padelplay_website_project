import Link from "next/link";
import React from "react";

export default function PricingPageLargeScreenTable() {
  return (
    <table className=" w-full   border-collapse border-2  border-yellow-500  mb-20">
      <thead>
        <tr>
          <th className="text-left p-4 w-1/6 ">{"FEATURES"}</th>
          <th className=" tableHeader ">{"BASIC"}</th>
          <th className=" tableHeader "> {"ESSENTIAL"}</th>
          <th className=" tableHeader ">{"PREMIUM"}</th>
        </tr>
      </thead>
      <tbody>
        <tr className="priceText">
          <td className=" featuresColText colSpacing priceTableCol">
            {"Camera"}
          </td>
          <td className=" colSpacing priceTableCol ">
            <span className="material-symbols-outlined">done</span>
          </td>
          <td className=" colSpacing priceTableCol">
            <span className="material-symbols-outlined">done</span>
          </td>
          <td className=" colSpacing  priceTableCol">
            <span className="material-symbols-outlined">done</span>
          </td>
        </tr>

        <tr className="priceText">
          <td className=" featuresColText colSpacing priceTableCol">
            {"Dynamic scoreboard"}
          </td>
          <td className=" colSpacing priceTableCol">
            <span className="material-symbols-outlined">done</span>
          </td>
          <td className=" colSpacing priceTableCol">
            <span className="material-symbols-outlined">done</span>
          </td>
          <td className=" colSpacing priceTableCol">
            <span className="material-symbols-outlined">done</span>
          </td>
        </tr>
        <tr className="priceText">
          <td className=" featuresColText colSpacing priceTableCol">
            {"Ads in stream"}
          </td>
          <td className=" colSpacing priceTableCol">
            <span className="material-symbols-outlined">done</span>
          </td>
          <td className=" colSpacing priceTableCol">
            <span className="material-symbols-outlined">done</span>
          </td>
          <td className=" colSpacing priceTableCol">
            <span className="material-symbols-outlined">done</span>
          </td>
        </tr>

        <tr className="priceText">
          <td className=" featuresColText colSpacing priceTableCol">
            {"QR-code for spontaneous streams"}
          </td>
          <td className=" colSpacing priceTableCol">
            <span className="material-symbols-outlined">done</span>
          </td>
          <td className=" colSpacing priceTableCol">
            <span className="material-symbols-outlined">done</span>
          </td>
          <td className=" colSpacing priceTableCol">
            <span className="material-symbols-outlined">done</span>
          </td>
        </tr>

        <tr className="priceText">
          <td className=" featuresColText colSpacing priceTableCol ">
            {"Remote service and "}
            <p>{"surveillance over the equipment"}</p>
          </td>
          <td className=" colSpacing priceTableCol">
            <span className="material-symbols-outlined">done</span>
          </td>
          <td className=" colSpacing priceTableCol">
            <span className="material-symbols-outlined">done</span>
          </td>
          <td className=" colSpacing priceTableCol">
            <span className="material-symbols-outlined">done</span>
          </td>
        </tr>

        <tr className="priceText">
          <td className=" featuresColText colSpacing priceTableCol">
            {"Commentators"}
          </td>
          <td className=" colSpacing priceTableCol">__</td>
          <td className=" colSpacing priceTableCol">
            <span className="material-symbols-outlined">done</span>
          </td>
          <td className=" colSpacing priceTableCol">
            <span className="material-symbols-outlined">done</span>
          </td>
        </tr>

        <tr className="priceText">
          <td className=" featuresColText colSpacing priceTableCol">
            {"Youtube channel"}
          </td>
          <td className=" colSpacing priceTableCol">__</td>
          <td className=" colSpacing priceTableCol">__</td>
          <td className=" colSpacing priceTableCol">
            <span className="material-symbols-outlined">done</span>
          </td>
        </tr>
        <tr className="priceText">
          <td className=" featuresColText colSpacing priceTableCol font-bold">
            {"Contract period"}
          </td>
          <td className=" colSpacing priceTableCol">{"12 Month"}</td>
          <td className=" colSpacing priceTableCol">{"12 Month"}</td>
          <td className=" colSpacing priceTableCol">{"12 Month"}</td>
        </tr>

        <tr className="  priceText">
          <td className=" featuresColText colSpacing priceTableCol font-bold">
            {"CTA"}
          </td>
          <td className=" colSpacing priceTableCol">{"Form & Call"}</td>
          <td className=" colSpacing priceTableCol">{"Form & Call"}</td>
          <td className=" colSpacing priceTableCol">{"Form & Call"}</td>
        </tr>

        <tr className="priceText">
          <td className=" featuresColText colSpacing priceTableCol font-bold">
            {"Price"}
          </td>
          <td className=" colSpacing priceTableCol font-bold text-yellow-500">
            {"750kr/month"}
          </td>
          <td className=" colSpacing priceTableCol font-bold text-yellow-500">
            {"1000kr/month"}
          </td>
          <td className=" colSpacing priceTableCol font-bold text-yellow-500">
            {"1500kr/month"}
          </td>
        </tr>
        {/* first buttons are here */}
        <tr className="priceText">
          <td className=" colSpacing priceTableCol"></td>

          <td className=" colSpacing priceTableCol  ">
            {/* <Link href="/choosePlan"> */}
            <Link
              href={{
                pathname: "/choosePlan",
                query: {
                  selectedPlan: "BASIC",
                },
              }}
            >
              <button className=" transparentButtonPricePage ">
                {"GET IT NOW"}
              </button>
            </Link>
          </td>
          <td className=" colSpacing priceTableCol  ">
            <Link href="/choosePlan">
              <button className=" transparentButtonPricePage ">
                {"GET IT NOW"}
              </button>
            </Link>
          </td>
          <td className=" colSpacing priceTableCol  ">
            <Link href="/choosePlan">
              <button className=" transparentButtonPricePage ">
                {"GET IT NOW"}
              </button>
            </Link>
          </td>
        </tr>

        <tr className="priceText">
          <td className=" featuresColText colSpacing priceTableCol font-bold">
            {"Extras"}
          </td>
          <td className=" colSpacing priceTableCol">
            {"Commentators (350kr/month)"}
            <p> {"Youtube channel (600krmonth)"}</p>
          </td>
          <td className=" colSpacing priceTableCol">
            {"Youtube channel (600krmonth)"}
          </td>
          <td className=" colSpacing priceTableCol">__</td>
        </tr>

        <tr className="priceText">
          <td className=" featuresColText colSpacing priceTableCol font-bold">
            {"Total Price"}
          </td>
          <td className=" colSpacing priceTableCol font-bold text-yellow-500">
            {"1700kr/month"}
          </td>
          <td className=" colSpacing priceTableCol font-bold text-yellow-500 ">
            {"1600kr/month"}
          </td>
          <td className=" colSpacing priceTableCol font-bold text-yellow-500">
            {"1500kr/month"}
          </td>
        </tr>
        <tr className="priceText">
          <td className=" featuresColText colSpacing priceTableCol font-bold">
            {"Special offer"}
          </td>
          <td className=" colSpacing priceTableCol font-bold">
            {"24 month - 20% off"}
          </td>
          <td className=" colSpacing priceTableCol font-bold">
            {"24 month - 20% off"}
          </td>
          <td className=" colSpacing priceTableCol font-bold">
            {"24 month - 20% off"}
          </td>
        </tr>

        {/* second buttons are here */}
        <tr className="priceText ">
          <td className=" colSpacing priceTableCol"></td>

          <td className=" colSpacing priceTableCol ">
            <Link href="/choosePlan">
              <button className=" transparentButtonPricePage ">
                {"GET IT NOW"}
              </button>
            </Link>
          </td>
          <td className=" colSpacing priceTableCol">
            <Link href="/choosePlan">
              <button className=" transparentButtonPricePage ">
                {"GET IT NOW"}
              </button>
            </Link>
          </td>
          <td className="colSpacing priceTableCol">
            <Link href="/choosePlan">
              <button className=" transparentButtonPricePage">
                {"GET IT NOW"}
              </button>
            </Link>
          </td>
        </tr>

        <tr className="priceText">
          <td className="featuresColText colSpacing priceTableCol font-bold">
            {"Coming soon"}
          </td>
          <td className=" colSpacing border border-yellow-500 " colSpan={3}>
            {"AI-statistics & insights by"}
            <Link href="https://www.plailab.com">
              <p className="underline hover:scale-105">{"Plailab"}</p>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
