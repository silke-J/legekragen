import { useEffect, useState } from "react";

const useFetchproducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchproducts = async () => {
    try {
      const response = await fetch("https://legekrogen.webmcdm.dk/products/");
      const data = await response.json();
      
      setProducts(data);
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  let recommended = products.filter((p) => p.recommended === true);
  

  useEffect(() => {
    fetchproducts();
  }, []);

  return {
    products,
    isLoading,
    error,
    recommended,
  };
};

export { useFetchproducts };
