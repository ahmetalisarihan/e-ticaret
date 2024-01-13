import textClip from "@/utils/TextClip";
import { Rating } from "@mui/material";
import Image from "next/image";
import React from "react";

const ProductCard = ({ product }: { product: any }) => {

    let productRating = product?.reviews.reduce((acc: number, item: any) => acc + item.rating, 0) / product?.reviews.length
  return (
    <div className="w-[240px] cursor-pointer flex flex-col shadow-lg p-2 rounded-md">
      <div className="relative h-[150px]">
        <Image src={product.image} alt="" fill className="object-contain" />
      </div>
      <div className="text-center mt-2 space-y-1">
        <div >{textClip(product.name)}</div>
        <Rating name="read-only" value={productRating} readOnly />
        <div className="text-orange-600 text-lg md:text-xl">{product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
