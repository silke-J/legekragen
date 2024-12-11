import styles from "./Udtaler.module.css";

const Udtaler = () => {
  return (
    <section className={styles.udtaler}>
      <h2>Vores kunder</h2>
      <h3>UDTALER</h3>
      <div className={styles.Flex}>
        
        <div className={styles.kunde1}>
          <h4>
            “Pakken kom dagen efter jeg bestilte. Der blev jeg positivt
            overrasket, da der står på deres hjemmeside at leveringstiden er 2-4
            hverdage. Og min lille Hugo elsker sin nye træhest.”{" "}
          </h4>
          <h5>- Heidi, mor til Hugo på 3 år</h5>
        </div>

        <div className={styles.kunde2}>
          <h4>
            “Jeg fik varen tilsendt i den forkerte farve, men da jeg kontaktede
            Legekrogens kundeservice, var de meget hurtige til at sende mig den
            rigtige farve. Jeg fik endda en gratis slikpose med. Det var meget
            lækkert”
          </h4>
          <h5>- Omar, onkel til Anton på 11 år </h5>
        </div>

        <div className={styles.kunde3}>
          <h4>
            “Når jeg skal bestille julegaver til alle mine 14 børnebørn, er det
            næsten en umulig opgave. Mine døtre har meget høje krav, når det
            kommer til legetøj til deres børn. Jeg tør næsten ikke købe noget.
            Men efter min gode ven Lars tippede mig om Legekrogen.dk, har jeg
            ikke længere problemer med at købe de perfekte julegaver. Tak til
            Legekrogen. Og Lars”
          </h4>
          <h5>- Karsten Hansen, Morfar </h5>
        </div>
      </div>
    </section>
  );
};
export default Udtaler;
