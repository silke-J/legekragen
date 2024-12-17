import { useLocalStorage } from "@uidotdev/usehooks";
import styles from "./card.module.css";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const Card = ({ product, basketItem }) => {
  const [Favortites, setFavortites] = useLocalStorage("Favortites", []);

  const isFavortite = Favortites.includes(product._id);

  const køb = () => {
    setFavortites((prevFavortites) =>
      isFavortite
        ? prevFavortites.filter((fav) => fav !== product._id)
        : [...prevFavortites, product._id]
    );
  };

  return (
    <div className={styles.row}>
      <figure className={styles.Card}>
        <Link to={`/product/${product._id}`}>
          <img src={product.image} alt={product.title} />
        </Link>
        <figcaption className={styles.info}>
          <h2>{product.title}</h2>
          <h3>{product.description}</h3>
          <h4>{product.price} kr</h4>
          <Button onClick={køb} buttonText={basketItem ? "Slet" : "Køb"} type="submit"/>
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;
