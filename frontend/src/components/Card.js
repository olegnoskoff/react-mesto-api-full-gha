import React, { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwner = card.owner === currentUser._id;
  const isLiked = card.likes.some((person) => person._id === currentUser._id);

  const activeLikeButtonClassName = isLiked ? "card__icon-button_active" : "";

  const handleCardClick = () => {
    onCardClick(card);
  };

  const handleCardLike = () => {
    onCardLike(card);
  };

  const handleCardDelete = () => {
    onCardDelete(card);
  };

  return (
    <div className="card">
      <img
        src={card.link}
        alt={card.name}
        className="card__image"
        onClick={handleCardClick}
      />
      <div className="card__text">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like">
          <button
            type="button"
            className={`card__icon ${activeLikeButtonClassName}`}
            aria-label="Добавить в избранное"
            onClick={handleCardLike}
          ></button>
          <span className="card__like-number">{card.likes.length}</span>
        </div>
      </div>

      {isOwner && (
        <button
          type="button"
          className="card__delete"
          aria-label="Удалить"
          onClick={handleCardDelete}
        ></button>
      )}
    </div>
  );
}

export default Card;
