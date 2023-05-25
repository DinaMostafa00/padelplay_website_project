import { getContacUstPage } from "@/sanity/sanity-utils";
import React from "react";

export default async function productPage() {
  const contactUs = await getContacUstPage();

  return (
    <div>
      {contactUs.map((contactUs) => (
        <div key={contactUs._id} className="defaultSpacing  ">
          <h1 className="text-2xl font-bold md:text-3xl  mb-10 xl:mb-15 text-yellow-500 ">
            {"CONTACT US"}
          </h1>

          <div className="lg:grid grid-cols-[400px_minmax(80px,_2fr)] gap-4 ">
            <div>
              <div className="contactUsDivs">
                <img src="/icon1.svg" alt="HEJ" className="contactUsIcons" />
                <p className="flex items-center hover:text-yellow-500 md:pr-20">
                  {contactUs.address}
                </p>
              </div>

              <div className="contactUsDivs  ">
                <img src="/icon2.svg" alt="HEJ" className="contactUsIcons" />
                <div className="flex-col items-center">
                  <h3 className="font-bold">General Inquiries</h3>
                  <p className="contactUsText mb-2 ">{contactUs.email1}</p>
                  <h3 className="font-bold">Business Inquiries</h3>
                  <p className="contactUsText">{contactUs.email2}</p>
                </div>
              </div>

              <div className="contactUsDivs">
                <img src="/icon3.svg" alt="HEJ" className="contactUsIcons" />
                <p className="flex items-center hover:text-yellow-500">
                  {contactUs.phoneNumber}
                </p>
              </div>
            </div>

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
        </div>
      ))}
    </div>
  );
}

{
  /* <h1>CONTACT US </h1>
          <div className="grid-cols-[100px_minmax(80px,_1fr)100px_minmax(80px,_1fr)] ">
            <div>
              <p>{contactUs.address}</p>

              <p>{contactUs.email1}</p>

              <p>{contactUs.email2}</p>

              <p>{contactUs.phoneNumber}</p>
            </div>

            <div>
              <form action="#" method="POST" className="max-w-lg mx-auto">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />

                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />

                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  SEND
                </button>
              </form>
            </div>
          </div> */
}
