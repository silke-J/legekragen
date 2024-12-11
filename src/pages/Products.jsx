import { useState } from "react";
import img from "../assets/heros/produkter.jpg";
import Card from "../compoents/card/card";
import MedlemLink from "../compoents/medlemlink/Medlemlink";
import PageHeaderProducts from "../compoents/pageheader/Products_pagheader/products_pageheader";
import { useFetchproducts } from "../hoods/useFetchprodukts";

const Products = () => {
  const {products} = useFetchproducts()
  console.log(products)
  return (
    <>
      <PageHeaderProducts
        img={img}
        title="På udkig efter nyt"
        subTitle="LEGETØJ?"
      />
      <div className="grid">
        {products?.map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </div>
      <MedlemLink />
    </>
  );
};
export default Products;
