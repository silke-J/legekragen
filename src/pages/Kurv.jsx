import Betalekurv from "../compoents/Kurv/Kurv";
import styles from "../style/pages/page.module.css";

const Kurv = () => {
  return (
    <>
      <div className={styles.betalekurvBackground}>
        <div className={styles.betalekurvTitle}>
          <h1>Din kruv</h1>
        </div>
      </div>

      <Betalekurv />
    </>
  );
};
export default Kurv;
