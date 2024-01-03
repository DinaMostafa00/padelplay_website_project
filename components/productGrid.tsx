import React from "react";
import Image from "next/image";

interface product {
  product: {
    image1: string;
    name: string;
    image2: string;
  };
}
const ProductGrid: React.FC<product> = ({ product }) => {
  return (
    <div>
      <div className="borderBox flex justify-center ">
        <div className="grid grid-cols-1   md:grid-cols-2 gap-5 md:gap-20 lg:pt-5">
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
    </div>
  );
};

export default ProductGrid;
