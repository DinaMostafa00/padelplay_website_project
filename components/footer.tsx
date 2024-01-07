import { getContacUstPage } from "@/sanity/sanity-utils";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const middleFooterLinks = [
  { href: "/product", label: "PRODUCT" },
  { href: "/priceing", label: "PRICES " },
  { href: "/arenas", label: "ARENAS" },
  { href: "/blog", label: " BLOG" },
];

export const Footer = () => {
  return (
    <footer className="bg-white text-black defaultSpacing  ">
      <div className="max-w-3xl mx-auto py-10 flex justify-between">
        <ul className="hidden flex-1 items-center justify-center space-x-8 lg:flex ">
          {middleFooterLinks.map((middleFooterLinks) => (
            <li key={middleFooterLinks.href} className="hover:text-yellow-500">
              <Link href={middleFooterLinks.href}>
                {middleFooterLinks.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/*  contactUs data Rendered here */}

      <div>
        <div className="grid grid-cols-2 gap-4 justify-between ">
          <Link href="/">
            <div className="relative cursor-pointer opacity-90 transtion hover:opacity-100 ">
              <Image
                src="/PLAYVIOLOGO.webp"
                alt="Company Logo"
                width={200}
                height={200}
              />
            </div>
          </Link>

          <div className="contactUsDivs flex justify-end ">
            <Link href="/contactus">
              <button className="transparentButton">CONTACT US</button>
            </Link>
          </div>
        </div>
        <div className=" flex justify-end pb-4 ">
          <p className="font-bold">{"Follow us:"}</p>

          <a
            href="https://www.instagram.com/padelplay.nu/?hl=en"
            className="px-2 hover:text-yellow-500"
          >
            <p className="font-thin "> {"Instagram"}</p>
          </a>
          <span className="text-gray-400 pr-2">{"|"}</span>
          <a
            href="https://www.linkedin.com/company/padelplay/?originalSubdomain=se"
            className="pr-2 hover:text-yellow-500"
          >
            <p className="font-thin "> {"LinkedIn"}</p>
          </a>
        </div>
        <div className="text-center font-thin text-gray-400 pb-4">
          <p>{"Copyright Playvio 2024"}</p>
        </div>
      </div>
    </footer>
  );
};
