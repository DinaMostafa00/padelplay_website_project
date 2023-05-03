import { getProductPage } from "@/sanity/sanity-utils";
import React from "react";

export default async function productPage() {
  const product = await getProductPage();

  return (
    <div>
      {product.map((product) => (
        <div key={product._id}>
          <h1>{product.headerInfo} </h1>

          <video controls autoPlay loop muted>
            <source src={product.videoUrl} type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
  );
}
