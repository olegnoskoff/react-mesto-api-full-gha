import React from "react";

function ImagePopup({ card, onClose }) {
  const isOpen = card !== null;

  return (
    <div className={`popup popup_type_image${isOpen ? " popup_opened" : ""}`}>
      {isOpen && (
        <div className="popup__content">
          <figure className="popup__image-container">
            <img
              src={card.link}
              alt={card.name}
              className="popup__image"
            />
            <figcaption className="popup__image-name">
              {card.name}
            </figcaption>
            <button
            className="popup__button-close"
            type="button"
            aria-label="Закрыть окно"
            onClick={onClose}
          ></button>
          </figure>
        </div>
      )}
    </div>
  );
}

export default ImagePopup;

