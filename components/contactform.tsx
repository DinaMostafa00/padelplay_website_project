"use client";
import { useState } from "react";
import { FormEvent } from "react-is/node_modules/@types/react";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("api/contact", {
        method: "POST",
        body: JSON.stringify({ firstName, lastName, email, message }),
        headers: {
          "content-type": "application/json",
        },
      });
    } catch (err: any) {
      console.log("Hey there is an error", err);
    }
  };

  return (
    <div className="">
      <form
        onSubmit={onSubmit}
        action="https://formsubmit.co/el/zudobo"
        method="POST"
        className="max-w-lg mx-auto"
      >
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          className="contactUsform w-full lg:w-[49%] lg:mr-1"
          required
        />

        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
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
          required
        />

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          name="message"
          placeholder="Message"
          className="  contactUsform w-full h-32"
          required
        ></textarea>

        <div className="flex justify-end">
          <button type="submit" className="yellowButton">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
