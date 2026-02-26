// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);

import { useState, useEffect } from "react";

import "./carousel.scss";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = pictures.length;
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isModalOpen]);

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
      <button
        type="button"
        className="carousel-image-button"
        onClick={() => setIsModalOpen(true)}
        aria-label="Ouvrir l'image en taille réelle"
        title="Ouvrir l'image en taille réelle"
      >
        <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
      </button>

      {isModalOpen && (
        <div className="carousel-modal" role="dialog" aria-modal="true" onClick={() => setIsModalOpen(false)}>
          <div className="carousel-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="carousel-modal-close"
              onClick={() => setIsModalOpen(false)}
              aria-label="Fermer"
            >
              <FontAwesomeIcon icon="fa-solid fa-xmark" className="carousel-modal-close-icon" />
            </button>
            <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-modal-image" />
          </div>
        </div>
      )}

      {/* Boutons navigation */}
      {total > 1 && (
        <>
          <button onClick={goPrev} aria-label="Image précédente" className="carousel-btn carousel-btn--prev">
            <FontAwesomeIcon icon="fa-solid fa-chevron-left" className="chevron chevron-left" />
          </button>

          <button onClick={goNext} aria-label="Image suivante" className="carousel-btn carousel-btn--next">
            <FontAwesomeIcon icon="fa-solid fa-chevron-right" className="chevron chevron-right" />
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
