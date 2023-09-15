import choosePlanForm from "@/components/choosePlanForm";
import DurationSelection from "@/components/durationSelection";
import ExtraSelection from "@/components/extraSelection";
import PriceSelection from "@/components/priceSelection";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

export default async function choosePlan() {
  return (
    <div className=" defaultSpacing">
      <Link href="/priceing">
        <button className="underline hover:text-yellow-500 ml-8 opacity-50 hover:opacity-100">
          {"<back"}
        </button>
      </Link>
      <h1 className="flex justify-center text-xl font-bold md:text-2xl  my-10 xl:my-15">
        {"Bring our streaming service to your arena"}
      </h1>

      <ChoosePlanForm />

      {/* <div>
        <form method="POST" className="max-w-lg mx-auto">
          <input
            type="text"
            id="arenaName"
            name="arenaName"
            placeholder="Arena Name*"
            className="contactUsform w-full lg:w-[49%] lg:mr-1"
            required
          />

          <input
            type="phone number"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number*"
            className="contactUsform  w-full lg:w-[49%] lg:mr-1"
            required
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail*"
            className="contactUsform w-full "
            required
          />
          <input
            type="text"
            id="country"
            name="country"
            placeholder="country*"
            className="contactUsform w-full "
            required
          />

          <input
            type="text"
            id="address"
            name="address"
            placeholder="Address*"
            className="contactUsform w-full "
            required
          />

          <PriceSelection />

          <DurationSelection />

          <input
            type="number"
            id="quantity"
            name="quantity"
            placeholder="quantity*"
            className="contactUsform  w-full lg:w-[49%] lg:mr-1"
            min="1"
            max="10"
            required
          />

          <ExtraSelection />

          <textarea
            id="additionalInformation"
            name="additionalInformation"
            placeholder="Additional Information"
            className="  contactUsform w-full"
            // rows="3"
          ></textarea>

          <div className="flex justify-end">
            <button type="submit" className="yellowButton">
              {"Submit"}
            </button>
          </div>
        </form>
      </div> */}
    </div>
  );
}
