import { useEffect, useState } from "react";

const useFetchproducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchproducts = async () => {
    try {
      const response = await fetch("https://legekrogen.webmcdm.dk/products/");
      const data = await response.json();
      console.log(data)
      setProducts(data);
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  let prices = products.filter((p) => p.price > 168);
  console.log(prices)

  useEffect(() => {
    fetchproducts();
  }, []);

  return {
    products,
    isLoading,
    error,
    prices,
  };
};

export { useFetchproducts };
