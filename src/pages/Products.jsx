import { useState } from "react";
import img from "../assets/heros/produkter.jpg";
import Card from "../compoents/card/card";
import MedlemLink from "../compoents/medlemlink/Medlemlink";
import PageHeaderProducts from "../compoents/pageheader/Products_pagheader/products_pageheader";
import { useFetchproducts } from "../hoods/useFetchprodukts";
import styles from "../style/pages/page.module.css";

const Products = () => {
  const {products} = useFetchproducts()
  console.log(products)
  return (
    <article className={styles.products}>
      <PageHeaderProducts
        img={img}
        title="På udkig efter nyt"
        subTitle="LEGETØJ?"
      />
      <div className="product">
        <h2>Alt vores</h2>
        <h3>LEGETØJ</h3>
        <div className="grid">
          {products?.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      </div>
      <MedlemLink />
    </article>
  );
};
export default Products;
