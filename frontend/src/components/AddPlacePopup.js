import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  const handleChangeName = (event) => {
    setName(event.target.value);
  }

  const handleChangeLink = (event) => {
    setLink(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__block">
        <input
          type="text"
          className="popup__input popup__input_type_title"
          id="title-input"
          placeholder="Название"
          name="name"
          minLength="2"
          maxLength="30"
          required
          value={name}
          onChange={handleChangeName}
        />
        <span className="popup__input-error title-input-error"></span>
      </label>
      <label className="popup__block">
        <input
          type="url"
          className="popup__input popup__input_type_link"
          id="link-input"
          placeholder="Ссылка на картинку"
          name="link"
          required
          value={link}
          onChange={handleChangeLink}
        />
        <span className="popup__input-error link-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
