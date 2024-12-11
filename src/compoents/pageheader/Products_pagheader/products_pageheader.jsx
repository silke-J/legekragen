import styles from "./products_pageHeader.module.css";

const PageHeaderProducts = ({ title, subTitle, img }) => {
  return (
    <header className={styles.header}>
      {img && <img src={img} alt={title} />}
      <div className={styles.headerContent}>
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </div>
    </header>
  );
};

export default PageHeaderProducts;