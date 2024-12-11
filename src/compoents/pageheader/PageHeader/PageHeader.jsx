import styles from "./PageHeader.module.css";

const PageHeader = ({ title, subTitle, img, bodyText }) => {
  return (
    <header className={styles.header}>
      {img && <img src={img} alt={title} />}
      <div className={styles.headerContent}>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <p>{bodyText}</p>
      </div>
    </header>
  );
};

export default PageHeader;
