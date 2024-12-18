import { useEffect, useState } from "react";
import styles from "../../style/pages/page.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useFetchqustions } from "../../hoods/useFetchqustion";
import parse from "html-react-parser"

const Question = () => {
    const {qustions} = useFetchqustions()

//   const faq = [
//     {
//       _id: "1",
//       question: "Hvor lang tid er leveringstiden?",
//       answers:
//         "2-4 hverdage. Det kan tage længere tid op til højtider og helligdage.",
//     },
//     {
//       _id: "2",
//       question:
//         "Hvad kan jeg gøre, hvis jeg finder varen billigere et andet sted?",
//       answers: (
//         <ul>
//           Hvad kan jeg gøre, hvis jeg finder varen billigere et andet sted?
//           <li> Prisen skal gælde på handelstidspunktet.</li>
//           <li> Varen skal være i samme model, farve og evt. størrelse.</li>
//           <li>
//             {" "}
//             Varen skal være på lager hos konkurrenten på tidspunktet for
//             prismatch.{" "}
//           </li>
//         </ul>
//       ),
//     },
//     {
//       _id: "3",
//       question: "Hvor lang tid har jeg til at returnere?",
//       answers:
//         "Vi tilbyder 30 dages retur/bytteret fra den dag, hvor du modtager varerne.",
//     },
//   ];


const [isOpen, setisOpen] = useState(null);
  const onToggle = (id) => {
    setisOpen((prev) => prev === id ? null : id);

  }
  return (
    <>
      <div className={styles.FAQ}>
        {qustions.map((item) => (
          <div className={styles.spørgsmål} key={item._id}>
            <p className={styles.question}>
              {item.question}
              <MdKeyboardArrowDown
                onClick={() => onToggle(item._id)}
                size={30}
                className="button"
              />
            </p>
            {isOpen === item._id && <p className={styles.answers}>{parse(item.answer)}</p>}
          </div>
        ))}
      </div>
    </>
  );
};
export default Question;
