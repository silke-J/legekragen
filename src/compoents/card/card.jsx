import { useLocalStorage } from "@uidotdev/usehooks";
import styles from "./card.module.css";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const [Favortites, setFavortites] = useLocalStorage("Favortites", []);

  const isFavortite = Favortites.includes(product.id);

  const handleLike = () => {
    setFavortites((prevFavortites) =>
      isFavortite
        ? prevFavortites.filter((fav) => fav !== product.id)
        : [...prevFavortites, product.id]
    );
  };

  return (
    <div className={styles.row}>
      <figure className={styles.Card}>
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.title} />
        </Link>
        <figcaption className={styles.info}>
          <h2>{product.title}</h2>
          <h3>{product.description}</h3>
          <h4>{product.price}kr</h4>
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;