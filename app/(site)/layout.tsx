import "../globals.css";
import { Inter } from "next/font/google";
import React from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Plaivio",
  description: "Streaming Service Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/PLAYVIO-favicon.svg" />
      </head>

      <body className="backGround">
        <Header />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,200"
        />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
