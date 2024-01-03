import { getProductPage } from "@/sanity/sanity-utils";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProductGrid from "@/components/productGrid";
import ProductImage from "@/components/productImage";

export default async function productPage() {
  const product = await getProductPage();

  return (
    <div>
      {product.map((product) => (
        // Product Heading
        <div key={product._id} className="defaultSpacing ">
          <h1 className="font-bold text-3xl flex justify-center pt-7">
            {product.headerInfo}
          </h1>

          {/* Product Video */}
          <video controls autoPlay loop muted className=" px-2 md:px-20 my-5">
            <source src={product.videoUrl} type="video/mp4" />
          </video>

          {/* Product Text1 */}
          <p className=" p-2 md:p-20 ">{product.text1}</p>

          {/* Product Grid */}
          <ProductGrid product={product} />

          {/* Product Text2 */}
          <p className="p-2 md:p-20  ">{product.text2}</p>

          {/* Product Images */}
          <ProductImage product={product} />

          {/* Product Text3 */}
          <p className="px-2 md:px-20 ">{product.text3}</p>

          {/* Buttons */}
          <div className="grid grid-cols-1   md:grid-cols-2  gap-5 md:gap-20 lg:py-5 my-10">
            <div className="transparentButton">
              <Link href="/priceing">
                <p className=" flex justify-center">{"PRICES"}</p>
              </Link>
            </div>

            <div className="transparentButton">
              <Link href="/contactus">
                <p className=" flex justify-center">{"CONTACT US"}</p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
