"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function InviteArena() {
  const [isSubmitted, setSubmitted] = useState(false);
  const [arenaName, setArenaName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [additionalInformation, setAdditionalInformation] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/inviteArenaApi", {
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
          additionalInformation,
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
    <div className="pb-20">
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
          placeholder="E-mail"
          className="contactUsform w-full "
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

        <textarea
          value={additionalInformation}
          onChange={(e) => setAdditionalInformation(e.target.value)}
          id="additionalInformation"
          name="additionalInformation"
          placeholder="Additional Information"
          className="  contactUsform w-full"
          rows={3}
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
