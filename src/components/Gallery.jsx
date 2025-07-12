import GALLERY from "../data/gallery";

import "./Gallery.scss";

const Gallery = () => {
  return (
    <section className="gallery">
      {GALLERY.map((item, index) => (
        <figure
          className={`gallery__item gallery__item--${index + 1}`}
          key={item.name}
        >
          <img src={item.src} alt={item.name} className="gallery__img" />
        </figure>
      ))}
    </section>
  );
};

export default Gallery;
