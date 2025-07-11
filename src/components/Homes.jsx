import HomeCard from "./HomeCard";

import HOMES from "../data/homes";

import "./Homes.scss";

const Homes = () => {
  return (
    <section className="homes">
      {HOMES.map(
        ({ imgName, name, location, numberOfRooms, area, price }, index) => {
          return (
            <HomeCard
              key={index}
              imgName={imgName}
              name={name}
              location={location}
              numberOfRooms={numberOfRooms}
              area={area}
              price={price}
            />
          );
        }
      )}
    </section>
  );
};

export default Homes;
