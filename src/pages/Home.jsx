import img from "../assets/heros/forsiden.jpg";
import Favortitter from "../compoents/favtotter/Favtotter";
import MedlemLink from "../compoents/medlemlink/Medlemlink";
import PageHeaderHome from "../compoents/pageheader/Home_pageheader/home_pageHeader";
import Udtaler from "../compoents/udtaler/Udtaler";
import styles from "../style/pages/page.module.css";


const Home = () => {
  return (
    <article className={styles.home}>
      <PageHeaderHome
        img={img}
        title="At lege er at leve"
        subTitle="Her hos os har vi et stort udvalg af legetøj i høj kvalitet"
      />
      <Favortitter />
  
      <Udtaler />

      <MedlemLink />
    </article>
  );
};
export default Home;
