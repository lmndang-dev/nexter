import FeatureItem from "./FeatureItem";

import FEATURES from "../data/features";

import "./Features.scss";

const Features = () => {
  return (
    <section className="features">
      {FEATURES.map(({ iconID, title, text }, index) => {
        return (
          <FeatureItem key={index} iconID={iconID} title={title} text={text} />
        );
      })}
    </section>
  );
};

export default Features;
