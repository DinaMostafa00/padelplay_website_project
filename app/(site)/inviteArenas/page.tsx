import React from "react";

export default async function inviteArenas() {
  return (
    <div>
      <h1 className="flex justify-center text-xl font-bold md:text-2xl  my-10 xl:my-15">
        {"Bring our streaming to your arena"}
      </h1>

      <div>
        <form
          action="https://formsubmit.co/el/jasugu"
          method="POST"
          className="max-w-lg mx-auto"
        >
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
            placeholder="E-mail"
            className="contactUsform w-full "
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

          <textarea
            id="additionalInformation"
            name="additionalInformation"
            placeholder="Additional Information"
            className="  contactUsform w-full"
            rows="3"
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