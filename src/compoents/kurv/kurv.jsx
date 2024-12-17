;import { useLocalStorage } from "@uidotdev/usehooks";
import Card from "../card/card";
import { useFetchproducts } from "../../hoods/useFetchprodukts";

const Betalekurv = () => {
  const [favorites] = useLocalStorage("Favortites", []);
  const { products } = useFetchproducts();

  const favortiteproducts = products.filter((product) =>
    favorites.includes(product._id)
  );

  return (
    <section className="grid">
      {favortiteproducts?.map((product) => (
        <Card key={product._id} product={product} basketItem={true} />
      ))}
    </section>
  );
};
export default Betalekurv;
