import Home from "../../pages/Home";
import Button from "../button/Button";
import styles from "./Modal.module.css";

const Modal = ({ children, onClose }) => {
  return (
    <div className={styles.filter}>
      <div className={styles.modalOverlay}>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
