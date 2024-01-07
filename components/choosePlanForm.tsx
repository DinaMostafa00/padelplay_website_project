"use client";
import React, { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ChoosePlanForm() {
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
  const [plan, setPlan] = useState(selectedPlan || "");
  const [duration, setDuration] = useState(selectedDuration || "");
  const [extras, setExtras] = useState(selectedExtra || "");
  const [errors, setErrors] = useState<FormErrorsPlans>({});

  interface FormErrorsPlans {
    arenaName?: string;
    phoneNumber?: string;
    email?: string;
    country?: string;
    address?: string;
    quantity?: string;
    additionalInformation?: string;
    plan?: string;
    duration?: string;
  }

  const validate = () => {
    let tempErrors: FormErrorsPlans = {};
    if (!arenaName) tempErrors.arenaName = "Arena Name is required";
    if (!phoneNumber) tempErrors.phoneNumber = "Phone Number is required";
    if (!email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i))
      tempErrors.email = "Email is invalid";
    if (!country) tempErrors.country = "Country Name is required";
    if (!address) tempErrors.address = "Address is required";
    if (!quantity) tempErrors.quantity = "Quantity is required";
    if (!additionalInformation)
      tempErrors.additionalInformation = "Additional Information is required";
    if (!plan) tempErrors.plan = "Plan is required";
    if (!duration) tempErrors.duration = "Duration is required";
    return tempErrors;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
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
            duration,
            extras,
          }),
        });

        if (res.status === 200) {
          setSubmitted(true);
        }
      } catch (err: any) {
        console.error("Err", err);
      }
    } else {
      setErrors(validationErrors);
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
    <div className="mb-16">
      <form onSubmit={onSubmit} method="POST" className="max-w-lg mx-auto">
        <div>
          <input
            value={arenaName}
            onChange={(e) => setArenaName(e.target.value)}
            type="text"
            id="arenaName"
            name="arenaName"
            placeholder="Arena Name*"
            className="contactUsform w-full lg:w-[49%] lg:mr-1"
          />
          {errors.arenaName && (
            <p className="text-red-500">{errors.arenaName}</p>
          )}

          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="phone number"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number*"
            className="contactUsform  w-full lg:w-[49%] lg:mr-1"
          />
          {errors.phoneNumber && (
            <p className="text-red-500">{errors.phoneNumber}</p>
          )}
        </div>

        <div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            placeholder="E-mail*"
            className="contactUsform w-full "
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <div>
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            type="text"
            id="country"
            name="country"
            placeholder="country*"
            className="contactUsform w-full "
          />
          {errors.country && <p className="text-red-500">{errors.country}</p>}
        </div>

        <div>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            id="address"
            name="address"
            placeholder="Address*"
            className="contactUsform w-full "
          />
          {errors.address && <p className="text-red-500">{errors.address}</p>}
        </div>

        {/* <PriceSelection /> */}

        <div>
          <select
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            name="plan"
            id="plan"
            className="contactUsform w-full "
          >
            <option disabled selected value="">
              {"Plan*"}
            </option>
            <option value="BASIC">{"BASIC"}</option>
            <option value="ESSENTIAL">{"ESSENTIAL"}</option>
            <option value="PREMIUM">{"PREMIUM"}</option>
          </select>
          {errors.plan && <p className="text-red-500">{errors.plan}</p>}
        </div>

        {/* <DurationSelection /> */}
        <div>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            name="duration"
            id="duration"
            className="contactUsform w-full lg:w-[49%] lg:mr-1"
          >
            <option disabled selected value="">
              {"duration*"}
            </option>
            <option value="12 Month">{"12 Month"}</option>
            <option value="24 month + 20% off">{"24 month + 20% off"}</option>
          </select>
          {errors.duration && <p className="text-red-500">{errors.duration}</p>}

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
          />
          {errors.quantity && <p className="text-red-500">{errors.quantity}</p>}
        </div>

        {/* <ExtraSelection /> */}
        <div>
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
            <option value="none">{"none"}</option>
            <option value="Youtube channel (600krmonth)">
              {"Youtube channel (600kr/month)"}
            </option>
            <option value="Commentators (350kr/month)+ Youtube channel (600kr/month)">
              {"Commentators (350kr/month) + Youtube channel (600kr/month)"}
            </option>
          </select>
        </div>

        <div>
          <textarea
            value={additionalInformation}
            onChange={(e) => setAdditionalInformation(e.target.value)}
            id="additionalInformation"
            name="additionalInformation"
            placeholder="Additional Information"
            className="  contactUsform w-full"
            // rows="3"
          ></textarea>
          {errors.additionalInformation && (
            <p className="text-red-500">{errors.additionalInformation}</p>
          )}
        </div>

        <div className="flex justify-end">
          <button type="submit" className="yellowButton">
            {"Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
