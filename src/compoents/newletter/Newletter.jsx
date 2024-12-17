import { useState, useEffect, useRef } from "react";
import styles from "./newletter.module.css";
import Loading from "../loading/loading";
import Button from "../button/Button";
import Modal from "../modal/Modal";

const Newsletter = () => {
  const [inputValueE, setInputValueE] = useState("");
  const [inputValueN, setInputValueN] = useState("");
  const [inputValueM, setInputValueM] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleInputMessage = (event) => {
    setInputValueM(event.target.value);
  };
  const handleInputEmail = (event) => {
    setInputValueE(event.target.value);
  };
  const handleInputNavn = (event) => {
    setInputValueN(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch("https://legekrogen.webmcdm.dk/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: inputValueE,
          name: inputValueN,
          message: inputValueM,
        }),
      });

      const result = await response.json();
      openModal();
      console.log(result)
      setIsLoading(false);
    } catch (error) {
      console.error("Fejl ved tilmelding:", error.message);
    }
    finally{setIsLoading(false)}
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Fulde navn"
            value={inputValueN}
            onChange={handleInputNavn}
            required
           
          />
          <input
            type="email"
            placeholder="Email"
            value={inputValueE}
            onChange={handleInputEmail}
            required
          
          />
          <textarea
            type="text"
            value={inputValueM}
            placeholder="Hvem køber du legetøj til?"
            onChange={handleInputMessage}
            required
          />
          <Button buttonText="BLIV MEDLEM NU!" type="submit" />
        </form>
      )}

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <div className={styles.submitBesked}>
            <div className={styles.besked}>
              <h2>Tak {inputValueN} !</h2>

              <p>Vi er så glade for at du vil være en del af vores kundeklub</p>

              <p>
                Tag et kig på din indbakke. Vi har givet dig fri fragt på din
                næste ordre.
              </p>
            </div>

            <button className={styles.lukbutton}>
              <a href="http://localhost:5173/">TIL FORSIDEN</a>
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Newsletter;
