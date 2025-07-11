import storyImg1 from "../assets/story-1.jpeg";
import storyImg2 from "../assets/story-2.jpeg";
import "./StoryPicture.scss";

const StoryPicture = () => {
  return (
    <div className="story__pictures">
      <img
        src={storyImg1}
        alt="couple with new house"
        className="story__img--1"
      />
      <img src={storyImg2} alt="new house" className="story__img--2" />
    </div>
  );
};

export default StoryPicture;
