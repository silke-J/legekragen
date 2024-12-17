import PageHeader from "../compoents/pageheader/PageHeader/PageHeader";
import img from "../assets/heros/FAQ.jpg";
import MedlemLink from "../compoents/medlemlink/Medlemlink";
import Question from "../compoents/Question/Question";

const FAQ = () => {
  return (
    <>
      <PageHeader
        img={img}
        title="Har du nogle "
        subTitle="SPØRGSMÅL?"
        bodyText="Måske er de allerede besvaret herunder. Ellers er du altid velkommen til at kontakte os."
      />
    <Question/>

      <MedlemLink />
    </>
  );
};
export default FAQ;
