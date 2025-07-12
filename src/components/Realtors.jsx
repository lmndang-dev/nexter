import { Fragment } from "react";

import REALTORS from "../data/realtors";

import "./Realtors.scss";

const Realtors = () => {
  return (
    <div className="realtors">
      <h3 className="heading-3">Top 3 realtors</h3>
      <div className="realtors__list">
        {REALTORS.map(({ imgSrc, name, numberOfHouseSold }, index) => {
          return (
            <Fragment key={index}>
              <img
                src={imgSrc}
                alt={`${name} profile picture`}
                className="realtors__img"
              />
              <div className="realtors__details">
                <h4 className="heading-4 heading-4--light">{name}</h4>
                <p className="realtors__sold">
                  {numberOfHouseSold} houses sold
                </p>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Realtors;
