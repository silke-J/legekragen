import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import Card from "../card/card";
import { useFetchproducts } from "../../hoods/useFetchprodukts";

const Myfav = () => {
  <div className="title">
    <h2>Alt vores</h2>
    <h3>LEGETØJ</h3>
  </div>;

  const [favorites] = useLocalStorage("Favortites", []);
  const [error, setError] = useState(null);
  const { products } = useFetchproducts();

  const favortiteproducts = products.filter((product) =>
    favorites.includes(product.id)
  );

  return (
    <section className="grid">
      {favortiteproducts?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </section>
  );
};
export default Myfav;
