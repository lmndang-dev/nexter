import sprite from "../assets/sprite.svg";
import "./FeatureItem.scss";

const FeatureItem = ({ iconID, title, text }) => {
  return (
    <div className="feature">
      <svg className="feature__icon">
        <use href={`${sprite}#icon-${iconID}`}></use>
      </svg>
      <h4 className="heading-4 heading--4--dark">{title}</h4>
      <p className="feature__text">{text}</p>
    </div>
  );
};

export default FeatureItem;
