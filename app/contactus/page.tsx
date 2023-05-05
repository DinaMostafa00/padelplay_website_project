import { getContacUstPage } from "@/sanity/sanity-utils";
import React from "react";

export default async function productPage() {
  const contactUs = await getContacUstPage();

  return (
    <div>
      <h1>hii</h1>
      {contactUs.map((contactUs) => (
        <div key={contactUs._id}>
          <h1>{contactUs.name} </h1>
        </div>
      ))}
    </div>
  );
}
