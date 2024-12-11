import { AiFillTruck } from "react-icons/ai";
import  style  from "./Fragt.module.css";
const Fragt = () => {
  return (
    <div className={style.text_top}>
      <div className={style.fragtcar_img}>
        <AiFillTruck size={25} />
      </div>

      <div className={style.text}>
        <h3>Fri fragt ved køb over 499,-</h3>
      </div>
    </div>
  );
};
export default Fragt;
