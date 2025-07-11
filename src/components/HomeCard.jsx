import sprite from "../assets/sprite.svg";
import "./HomeCard.scss";

const formatNumber = (number) => {
  const formattedNumber = new Intl.NumberFormat("en-US").format(number);

  return formattedNumber;
};

const HomeCard = ({ imgName, name, location, numberOfRooms, area, price }) => {
  return (
    <div className="home">
      <img src={`/${imgName}.jpeg`} alt={imgName} className="home__img" />

      <svg className="home__like">
        <use href={`${sprite}#icon-heart`}></use>
      </svg>

      <h5 className="home__name">{name}</h5>

      <div className="home__location">
        <svg>
          <use href={`${sprite}#icon-map-pin`}></use>
        </svg>
        <p>{location}</p>
      </div>

      <div className="home__rooms">
        <svg>
          <use href={`${sprite}#icon-profile-male`}></use>
        </svg>
        <p>{numberOfRooms} rooms</p>
      </div>

      <div className="home__area">
        <svg>
          <use href={`${sprite}#icon-expand`}></use>
        </svg>
        <p>
          {area} m<sup>2</sup>
        </p>
      </div>

      <div className="home__price">
        <svg>
          <use href={`${sprite}#icon-key`}></use>
        </svg>
        <p>${formatNumber(price)}</p>
      </div>

      <button className="cta">Contact realtor</button>
    </div>
  );
};

export default HomeCard;
