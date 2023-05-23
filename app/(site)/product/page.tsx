import { getProductPage } from "@/sanity/sanity-utils";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default async function productPage() {
  const product = await getProductPage();

  return (
    <div>
      {product.map((product) => (
        <div key={product._id} className="defaultSpacing backGround">
          <h1 className="font-bold texr-2xl flex justify-center pt-7">
            {product.headerInfo}
          </h1>

          <video controls autoPlay loop muted className=" px-2 md:px-20 my-5">
            <source src={product.videoUrl} type="video/mp4" />
          </video>

          <p className=" px-2 md:px-20 ">{product.text1}</p>

          <div className="borderBox flex justify-center ">
            <div className="grid grid-cols-1   md:grid-cols-2 gap-5 md:gap-20 lg:py-5">
              <div className="h-64">
                {product.image1 && (
                  <Image
                    src={product.image1}
                    alt={product.name}
                    width={650}
                    height={300}
                    className="object-cover"
                  />
                )}
              </div>

              <div className="">
                {product.image2 && (
                  <Image
                    src={product.image2}
                    alt={product.name}
                    width={650}
                    height={300}
                    className="object-cover"
                  />
                )}
              </div>
            </div>
          </div>
          <p className="px-2 md:px-20 ">{product.text2}</p>

          <div className="flex justify-center borderBox">
            {product.image3 && (
              <Image
                src={product.image3}
                alt={product.name}
                width={650}
                height={300}
                className="object-cover"
              />
            )}
          </div>

          <p className="px-2 md:px-20 ">{product.text3}</p>

          <div className="grid grid-cols-1   md:grid-cols-2  gap-5 md:gap-20 lg:py-5 my-10">
            <div className="transparentButton">
              <Link href="/priceing">
                <p className=" flex justify-center">PRICES</p>
              </Link>
            </div>

            <div className="transparentButton">
              <Link href="/contactus">
                <p className=" flex justify-center">CONTACT US</p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
