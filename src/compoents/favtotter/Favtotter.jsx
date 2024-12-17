
import { useFetchproducts } from "../../hoods/useFetchprodukts";
import Card from "../card/card";
import Loading from "../loading/loading";

const Favortitter = () => {
  const { isLoading, recommended } = useFetchproducts();

  return (
    <section className="product">
      <h2>Et udpluk af vores</h2>
      <h3>LEGETØJ</h3>
      <div className="grid">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {recommended.map((product) => (
              <Card key={product._id} product={product} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};
export default Favortitter;
