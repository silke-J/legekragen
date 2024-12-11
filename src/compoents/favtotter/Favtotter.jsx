
import { useFetchproducts } from "../../hoods/useFetchprodukts";
import Card from "../card/card";
import Loading from "../loading/loading";

const Favortitter = () => {
  const { isLoading, price } = useFetchproducts();

  return (
    <section className="grid">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {price.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </>
      )}
    </section>
  );
};
export default Favortitter;
