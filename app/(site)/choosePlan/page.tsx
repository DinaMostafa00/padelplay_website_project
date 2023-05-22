import React from "react";

export default async function choosePlan() {
  return (
    <div>
      <h1 className="text-2xl font-bold md:text-5xl  mb-10 xl:mb-15">
        CONTACT US
      </h1>

      <div>
        <form
          action="https://formsubmit.co/el/jasugu"
          method="POST"
          className="max-w-lg mx-auto"
        >
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            className="contactUsform w-full lg:w-[49%] lg:mr-1"
            required
          />

          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            className="contactUsform  w-full lg:w-[49%] lg:mr-1"
            required
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            className="contactUsform w-full "
            required
          />

          <textarea
            id="message"
            name="message"
            placeholder="Message"
            className="  contactUsform w-full"
            rows="6"
            required
          ></textarea>

          <div className="flex justify-end">
            <button type="submit" className="yellowButton">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
