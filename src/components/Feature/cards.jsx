
import { HiArrowRight } from "react-icons/hi";
import "./cart.css";
const Card = (props) => {
  return (
    <>
      <div className="cards">
        <div className="icon">
          {props.icon}
        </div>
        <div className="title">
          <h2>{props.title}</h2>
        </div>
        <div className="des">
          <h5>{props.des}</h5>
        </div>
        <div className="icon2">
          <HiArrowRight/>
        </div>
      </div>
    </>
  );
};

export default Card;
