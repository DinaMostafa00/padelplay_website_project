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

          <select
            name="duration"
            id="duration"
            className="contactUsform w-full lg:w-[49%] lg:mr-1"
            required
          >
            <option disabled selected value="">
              duration*
            </option>
            <option>12 Month</option>
            <option>24 month + 20% off</option>
          </select>

          <input
            type="number"
            id="quantity"
            name="quantity"
            placeholder="quantity*"
            className="contactUsform  w-full lg:w-[49%] lg:mr-1"
            required
          />
          <input
            type="extras"
            id="extras"
            name="extras"
            placeholder="Extras"
            className="contactUsform w-full "
          />

          <textarea
            id="additionalInformation"
            name="additionalInformation"
            placeholder="Additional Information"
            className="  contactUsform w-full"
            // rows="3"
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
