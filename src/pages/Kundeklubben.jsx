import PageHeader from "../compoents/pageheader/PageHeader/PageHeader";
import img from "../assets/heros/medlem.jpg";
import Newsletter from "../compoents/newletter/Newletter";

const Kundeklubben = () => {
  return (
    <>
      <PageHeader
        img={img}
        title="Bliv medlem af vores"
        subTitle="KUNDEKLUB"
        bodyText="og få eksklusive nyheder før alle andre "
      />

      <Newsletter />
    </>
  );
};
export default Kundeklubben;
