import "../globals.css";
import { Inter } from "next/font/google";
import React from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,200"
        />
        {children}
      </body>
    </html>
  );
}

//////////////

//footer

/* <footer className="bg-white text-black ">
          <div className="max-w-3xl mx-auto py-10">
            <Link className="headerLink" href="/product">
              {" PRODUCT"}
            </Link>
            <Link className="headerLink" href="/prices">
              {"PRICES "}
            </Link>
            <Link className="headerLink" href="/streams">
              {"      STREAMS"}
            </Link>
            <Link className="headerLink" href="/blog">
              {"  BLOG "}
            </Link>
          </div>
        </footer> */

//header
// <header className="fixed top-0 z-30 flex w-full items-center justify-between bg-transparent py-10">
//   <div className="flex items-center justify-center md:w-1/5">
//     <Link href="/">
//       <div className="relative h-10 w-5 cursor-pointer opacity-75 transtion hover:opacity-100"></div>
//     </Link>
//   </div>

//   <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
//     <Link className="headerLink" href="/product">
//       {" PRODUCT"}
//     </Link>
//     <Link className="headerLink" href="/prices">
//       {"PRICES "}
//     </Link>
//     <Link className="headerLink" href="/streams">
//       {"      STREAMS"}
//     </Link>
//     <Link className="headerLink" href="/blog">
//       {"  BLOG "}
//     </Link>
//   </div>

//   <div className=" relative cursor-pointer opacity-75 transition hover:opacity-100 px-10 mx-20  border-2 border-yellow-300 md:flex">
//     <Link className="headerLink" href="/contactus">
//       {"  CONTACT US  "}
//     </Link>
//   </div>
// </header>
