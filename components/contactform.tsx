"use client";

import { useState } from "react";

export default function ContactForm() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("firstName ", firstName);
    console.log("lastName: ", lastName);
    console.log("Email: ", email);
    console.log("Message: ", message);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        message,
      }),
    });

    const { msg } = await res.json();
    setError(msg);
    console.log(error);
    // setSuccess(success);

    // if (success) {
    //   setfirstName("");
    //   setlastName("");
    //   setEmail("");
    //   setMessage("");
    // }
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        action="https://formsubmit.co/el/zudobo"
        method="POST"
        className="max-w-lg mx-auto"
      >
        <input
          onChange={(e) => setfirstName(e.target.value)}
          value={firstName}
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          className="contactUsform w-full lg:w-[49%] lg:mr-1"
          required
        />

        <input
          onChange={(e) => setlastName(e.target.value)}
          value={lastName}
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          className="contactUsform  w-full lg:w-[49%] lg:mr-1"
          required
        />

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          id="email"
          name="email"
          placeholder="E-mail"
          className="contactUsform w-full "
          required
        />

        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
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

      {/* Error message */}
      <div>
        <div>Error message</div>
      </div>
      {/* Error message */}
    </div>
  );
}
