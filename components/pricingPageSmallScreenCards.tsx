import Link from "next/link";
import React from "react";

export default function PricingPageSmallScreenCards() {
  return (
    <div className="grid grid-cols-1 gap-4">
      {/* card One */}
      <div className="bg-transparent border border-yellow-500  p-4">
        <h2 className="text-center font-bold">{"BASIC"}</h2>
        <ul className="mt-4 ">
          <li className="flex items-center">
            <span className="material-symbols-outlined  mr-2">done</span>
            {"Camera"}
          </li>
          <li className="flex items-center">
            <span className="material-symbols-outlined  mr-2">done</span>
            {"Dynamic scoreboard"}
          </li>
          <li className="flex items-center">
            <span className="material-symbols-outlined mr-2">done</span>
            {"Ads in stream"}
          </li>
          <li className="flex items-center">
            <span className="material-symbols-outlined  mr-2">done</span>
            {"QR-code for spontaneous streams"}
          </li>
          <li className="flex items-start">
            <span className="material-symbols-outlined mr-2">done</span>
            {"Remote service and surveillance over the equipment"}
          </li>
        </ul>

        <p className=" text-center text-yellow-500 font-bold mt-4">
          {"Price: 750kr/month"}
        </p>
        <Link
          href={{
            pathname: "/choosePlan",
            query: {
              selectedPlan: "BASIC",
            },
          }}
        >
          <div className=" flex justify-center">
            <button className=" transparentButtonPricePage ">
              {"GET IT NOW"}
            </button>
          </div>
        </Link>

        <p className="  text-center font-bold pt-6">
          {"Extras: Commentators (350kr/month), Youtube channel (600kr/month)"}
        </p>
        <p className="text-center text-yellow-500 font-bold ">
          {"Total Price: 1700kr/month"}
        </p>
        <p className="text-center font-thin">
          {"Special offer 24 month - 20% off"}
        </p>
        <div className="flex justify-center mt-4">
          <Link
            href={{
              pathname: "/choosePlan",
              query: {
                selectedPlan: "ESSENTIAL",
                selectedDuration: "24 month + 20% off",
                selectedExtra: "Youtube channel (600krmonth)",
              },
            }}
          >
            <button className=" transparentButtonPricePage ">
              {"GET IT NOW"}
            </button>
          </Link>
        </div>
      </div>

      {/* card Two */}
      <div className="bg-transparent border border-yellow-500  p-4">
        <h2 className="text-center font-bold">ESSENTIAL</h2>
        <ul className="mt-4">
          <li className="flex items-center">
            <span className="material-symbols-outlined  mr-2">done</span>
            {"Camera"}
          </li>
          <li className="flex items-center">
            <span className="material-symbols-outlined mr-2">done</span>
            {"Dynamic scoreboard"}
          </li>
          <li className="flex items-center">
            <span className="material-symbols-outlined  mr-2">done</span>
            {"Ads in stream"}
          </li>
          <li className="flex items-center">
            <span className="material-symbols-outlined  mr-2">done</span>
            {"QR-code for spontaneous streams"}
          </li>
          <li className="flex items-start">
            <span className="material-symbols-outlined  mr-2">done</span>
            {"Remote service and surveillance over the equipment"}
          </li>
          <li className="flex items-start">
            <span className="material-symbols-outlined  mr-2">done</span>
            {"Commentators"}
          </li>
        </ul>

        <p className=" text-center text-yellow-500 font-bold mt-4">
          {"Price: 1000kr/month"}
        </p>
        <Link
          href={{
            pathname: "/choosePlan",
            query: {
              selectedPlan: "ESSENTIAL",
            },
          }}
        >
          <div className=" flex justify-center">
            <button className=" transparentButtonPricePage ">
              {"GET IT NOW"}
            </button>
          </div>
        </Link>

        <p className="  text-center font-bold pt-6">
          {"Extras:  Youtube channel (600kr/month)"}
        </p>
        <p className="text-center text-yellow-500 font-bold ">
          {"Total Price: 1600kr/month"}
        </p>
        <p className="text-center font-thin">
          {"Special offer 24 month - 20% off"}
        </p>
        <div className="flex justify-center mt-4">
          <Link
            href={{
              pathname: "/choosePlan",
              query: {
                selectedPlan: "ESSENTIAL",
                selectedDuration: "24 month + 20% off",
                selectedExtra: "Youtube channel (600krmonth)",
              },
            }}
          >
            <button className=" transparentButtonPricePage ">
              {"GET IT NOW"}
            </button>
          </Link>
        </div>
      </div>

      {/* card Three */}
      <div className="bg-transparent border border-yellow-500  p-4">
        <h2 className="text-center font-bold">ESSENTIAL</h2>
        <ul className="mt-4">
          <li className="flex items-center">
            <span className="material-symbols-outlined  mr-2">done</span>
            {"Camera"}
          </li>
          <li className="flex items-center">
            <span className="material-symbols-outlined mr-2">done</span>
            {"Dynamic scoreboard"}
          </li>
          <li className="flex items-center">
            <span className="material-symbols-outlined  mr-2">done</span>
            {"Ads in stream"}
          </li>
          <li className="flex items-center">
            <span className="material-symbols-outlined  mr-2">done</span>
            {"QR-code for spontaneous streams"}
          </li>
          <li className="flex items-start">
            <span className="material-symbols-outlined  mr-2">done</span>
            {"Remote service and surveillance over the equipment"}
          </li>
          <li className="flex items-start">
            <span className="material-symbols-outlined  mr-2">done</span>
            {"Commentators"}
          </li>

          <li className="flex items-start">
            <span className="material-symbols-outlined  mr-2">done</span>
            {"Youtube channel"}
          </li>
        </ul>

        <p className="text-yellow-500 font-bold mt-4 text-center">
          {"Price: 1500kr/month"}
        </p>
        <Link
          href={{
            pathname: "/choosePlan",
            query: {
              selectedPlan: "PREMIUM",
            },
          }}
        >
          <div className=" flex justify-center">
            <button className=" transparentButtonPricePage ">
              {"GET IT NOW"}
            </button>
          </div>
        </Link>

        <p className="  text-center font-bold pt-6">{"Extras: --- "}</p>
        <p className="text-center text-yellow-500 font-bold ">
          {"Total Price: 1500kr/month"}
        </p>
        <p className="text-center font-thin">
          {"Special offer 24 month - 20% off"}
        </p>
        <div className="flex justify-center mt-4">
          <Link
            href={{
              pathname: "/choosePlan",
              query: {
                selectedPlan: "PREMIUM",
                selectedDuration: "24 month + 20% off",
                selectedExtra: "none",
              },
            }}
          >
            <button className=" transparentButtonPricePage">
              {"GET IT NOW"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
