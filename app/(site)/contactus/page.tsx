import ContactForm from "@/components/contactform";
import { getContacUstPage } from "@/sanity/sanity-utils";
import React from "react";

export default async function productPage() {
  const contactUs = await getContacUstPage();

  return (
    <div>
      {contactUs.map((contactUs) => (
        <div key={contactUs._id} className="defaultSpacing">
          <h1 className="text-lg font-bold md:text-3xl  mb-10 xl:mb-15 text-yellow-500 ml-7 ">
            {"CONTACT US"}
          </h1>

          <div className="lg:grid grid-cols-[400px_minmax(80px,_2fr)] gap-4 pb-20">
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

            {/* <Contactform /> */}

            <ContactForm />

            {/* <div className="">
              <form
                action="https://formsubmit.co/el/zudobo"
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
                  className="  contactUsform w-full h-32"
                  required
                ></textarea>

                <div className="flex justify-end">
                  <button type="submit" className="yellowButton">
                    Submit
                  </button>
                </div>
              </form>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
}
