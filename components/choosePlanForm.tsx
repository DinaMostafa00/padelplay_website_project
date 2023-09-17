"use client";
import React, { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
// import DurationSelection from "./durationSelection";
// import ExtraSelection from "./extraSelection";
// import PriceSelection from "./priceSelection";

import Link from "next/link";

export default function choosePlanForm() {
  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get("selectedPlan");
  const selectedDuration = searchParams.get("selectedDuration");
  const selectedExtra = searchParams.get("selectedExtra");

  const [isSubmitted, setSubmitted] = useState(false);
  const [arenaName, setArenaName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState("");
  const [additionalInformation, setAdditionalInformation] = useState("");
  // const [plan, setPlan] = useState("");
  const [plan, setPlan] = useState(selectedPlan || "");
  const [duration, setDuration] = useState(selectedDuration || "");
  const [extras, setExtras] = useState(selectedExtra || "");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/choosePlan", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          arenaName,
          phoneNumber,
          email,
          country,
          address,
          quantity,
          additionalInformation,
          plan,
        }),
      });

      if (res.status === 200) {
        setSubmitted(true);
      }
    } catch (err: any) {
      console.error("Err", err);
    }
  };

  return isSubmitted ? (
    <div className="flex flex-col  items-center m-12  ">
      <h3 className="text-center text-2xl font-bold  mb-2">
        {"Thank you for reaching out to us!  "}
      </h3>
      <p className="text-center text-xl font-thin mb-10">
        {
          "Your message is on its way to us! Expect to hear from us soon. Thank you!! "
        }
      </p>

      <Link className="headerLink" href="/">
        <button className="yellowButton">{"Back to the home page"}</button>
      </Link>
    </div>
  ) : (
    <div>
      <form onSubmit={onSubmit} method="POST" className="max-w-lg mx-auto">
        <input
          value={arenaName}
          onChange={(e) => setArenaName(e.target.value)}
          type="text"
          id="arenaName"
          name="arenaName"
          placeholder="Arena Name*"
          className="contactUsform w-full lg:w-[49%] lg:mr-1"
          required
        />

        <input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="phone number"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Phone Number*"
          className="contactUsform  w-full lg:w-[49%] lg:mr-1"
          required
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          name="email"
          placeholder="E-mail*"
          className="contactUsform w-full "
          required
        />
        <input
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          type="text"
          id="country"
          name="country"
          placeholder="country*"
          className="contactUsform w-full "
          required
        />

        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          id="address"
          name="address"
          placeholder="Address*"
          className="contactUsform w-full "
          required
        />

        {/* <PriceSelection /> */}
        <select
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          name="plan"
          id="plan"
          className="contactUsform w-full "
          required
        >
          <option disabled selected value="">
            {"Plan*"}
          </option>
          <option selected={selectedPlan === "BASIC"}>{"BASIC"}</option>
          <option selected={selectedPlan === "ESSENTIAL"}>{"ESSENTIAL"}</option>
          <option selected={selectedPlan === "PREMIUM"}>{"PREMIUM"}</option>
          <option>{"BASIC"}</option>
          <option>{"ESSENTIAL"}</option>
          <option>{"PREMIUM"}</option>
        </select>

        {/* <DurationSelection /> */}
        <select
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          name="duration"
          id="duration"
          className="contactUsform w-full lg:w-[49%] lg:mr-1"
          required
        >
          <option disabled selected value="">
            {"duration*"}
          </option>
          <option>{"12 Month"}</option>
          <option selected={selectedDuration === "24 month + 20% off"}>
            {"24 month + 20% off"}
          </option>
        </select>

        <input
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          type="number"
          id="quantity"
          name="quantity"
          placeholder="quantity*"
          className="contactUsform  w-full lg:w-[49%] lg:mr-1"
          min="1"
          max="10"
          required
        />

        {/* <ExtraSelection /> */}
        <select
          value={extras}
          onChange={(e) => setExtras(e.target.value)}
          id="extras"
          name="extras"
          className="contactUsform w-full"
        >
          <option disabled selected value="">
            {"Extras"}
          </option>
          <option selected={selectedExtra === "none"}>{"none"}</option>

          <option selected={selectedExtra === "Youtube channel (600krmonth)"}>
            {"Youtube channel (600krmonth)"}
          </option>

          <option
            selected={
              selectedExtra ===
              "Commentators (350kr/month)+ Youtube channel (600krmonth)"
            }
          >
            {"Commentators (350kr/month)+ Youtube channel (600krmonth)"}
          </option>
        </select>

        <textarea
          value={additionalInformation}
          onChange={(e) => setAdditionalInformation(e.target.value)}
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
  );
}
