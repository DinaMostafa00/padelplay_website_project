import React from "react";
import Image from "next/image";

interface product {
  product: {
    image3: string;
    name: string;
  };
}
const ProductImage: React.FC<product> = ({ product }) => {
  return (
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
  );
};

export default ProductImage;
