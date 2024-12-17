import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./produktdettails.module.css";
import PageHeader from "../../compoents/pageheader/PageHeader/PageHeader";
import Button from "../../compoents/button/Button";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setproduct] = useState(null);

  const fetchproductById = async (id) => {
    const response = await fetch(
      `https://legekrogen.webmcdm.dk/products/${id}`
    );
    const data = await response.json();
    setproduct(data[0]);
  };

  useEffect(() => {
    fetchproductById(id);
  }, [id]);
  console.log(product)

  return (
    <>
      {product && (
        <article className={styles.productContent}>
          <PageHeader
            title={product.title}
            img={product.image}
            subTitle={product.description}
            bodyText={`${product.price} kr.`}
          />
          <Button className={styles.Button} buttonText="Køb" type="submit"></Button>
        </article>
      )}
    </>
  );
};

export default ProductDetails;
