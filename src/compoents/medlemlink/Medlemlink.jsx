import styles from "./Medlemlink.module.css";

const MedlemLink = () => {
  return (
    <section className={styles.medlemlink}>
      <p>Kunne du også tænke dig at blive medlem af vores</p>
      <h2>Kundeklub?</h2>
      <button>
        <a href="http://localhost:5173/kundeklubben">BLIV MEDLEM NU!</a>
      </button>
    </section>
  );
};
export default MedlemLink;
