"use client";
import React, { useState } from "react";
import PageContainer from "../containers/PageContainer";
import Image from "next/image";
import Counter from "../general/Counter";


export type CardProductProps = {
    id: string
    name: string
    description: string
    price: number
    quantity: number
    image: string
    inStock: boolean
}

const DetailClient = ({ product }: { product: any }) => {

    const [cardProduct, setCardProduct] = useState<CardProductProps>(
        {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            quantity: 1,
            image: product.image,
            inStock: product.inStock
        }
    );

    const increaseFunc = () => {
        if(cardProduct.quantity == 10) return
        setCardProduct(prev => ({...prev, quantity: prev.quantity + 1 }))
     }
     const decreaseFunc = () => {
         if(cardProduct.quantity == 1) return
         setCardProduct(prev => ({...prev, quantity: prev.quantity - 1 }))
     }

  return (
    <div className="my-10">
      <PageContainer>
        <div className="block md:flex gap-10 justify-center">
          <div className="relative h-[400px] w-[400px]">
            <Image src={product?.image} alt="" fill />
          </div>
          <div className="w-1/2 space-y-3">
            <div className="text-xl md:text-2xl">{product?.name}</div>
            <div className="text-slate-500">{product?.description}</div>
            <div className="flex items-center gap-2">
            <div>STOK DURUMU:</div>
            {product.inStock ? <div className="text-green-500">Stokta var</div> : <div className="text-red-500">Stokta yok</div>}
          </div>
          <Counter increaseFunc={increaseFunc} decreaseFunc={decreaseFunc} cardProduct={cardProduct} />
          </div>
          
        </div>
      </PageContainer>
    </div>
  );
};

export default DetailClient;
