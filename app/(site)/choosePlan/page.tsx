import PriceSelection from "@/components/PriceSelection";
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

      <div>
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
          {/* <select
            name="plan"
            id="plan"
            className="contactUsform w-full "
            required
          >
            <option disabled selected value="">
              {"Plan*"}
            </option>
            <option>{"BASIC"}</option>
            <option> {"ESSENTIAL"}</option>
            <option> {"PREMIUM"}</option>
           
          </select> */}

          <select
            name="duration"
            id="duration"
            className="contactUsform w-full lg:w-[49%] lg:mr-1"
            required
          >
            <option disabled selected value="">
              {"duration*"}
            </option>
            <option>{"12 Month"}</option>
            <option>{"24 month + 20% off"}</option>
          </select>

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

          <select id="extras" name="extras" className="contactUsform w-full">
            <option disabled selected value="">
              {"Extras"}
            </option>
            <option>{"none"}</option>
            <option>{"Youtube channel (600krmonth)"}</option>
            <option>
              {"Commentators (350kr/month)+ Youtube channel (600krmonth)"}
            </option>
          </select>

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
      </div>
    </div>
  );
}
