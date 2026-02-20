import { useState } from "react";
import RightArrow from "../../assets/right.png";
import LeftArrow from "../../assets/left.png";

import "./carousel.scss";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = pictures.length;

  if (!pictures || total === 0) {
    return <p className="carousel-empty">Aucune image à afficher</p>;
  }

  const goNext = () => {
    setCurrentIndex((index) => (index === total - 1 ? 0 : index + 1));
  };

  const goPrev = () => {
    setCurrentIndex((index) => (index === 0 ? total - 1 : index - 1));
  };

  return (
    <div className="carousel">
      {/* Image */}
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />

      {/* Boutons navigation */}
      {total > 1 && (
        <>
          <button onClick={goPrev} aria-label="Image précédente" className="carousel-btn carousel-btn--prev">
            <img src={LeftArrow} alt="Image précédente" />
          </button>

          <button onClick={goNext} aria-label="Image suivante" className="carousel-btn carousel-btn--next">
            <img src={RightArrow} alt="Image suivante" />
          </button>
        </>
      )}

      {/* Compteur */}
      <div className="carousel-counter">
        {/* Style : display none en version mobile */}
        {currentIndex + 1}/{total}
      </div>
    </div>
  );
};

export default Carousel;
