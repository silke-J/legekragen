import img from "../assets/heros/forsiden.jpg";
import MedlemLink from "../compoents/medlemlink/Medlemlink";
import Myfav from "../compoents/Myfav/MyFav";
import Newsletter from "../compoents/newletter/Newletter";
import PageHeaderHome from "../compoents/pageheader/Home_pageheader/home_pageHeader";
import Udtaler from "../compoents/udtaler/Udtaler";


const Home = () => {
  return (
    <>
      <PageHeaderHome
        img={img}
        title="At lege er at leve"
        subTitle="Her hos os har vi et stort udvalg af legetøj i høj kvalitet"
      />
      <Myfav/>

      <Udtaler/>

      <MedlemLink/>
    </>
  );
};
export default Home;
