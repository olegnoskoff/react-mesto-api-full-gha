import React, { useContext, useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [isOpen, currentUser]);

  const handleChangeName = (event) => {
    const text = event.target.value;
    setName(text);
  };

  const handleChangeDescription = (event) => {
    const text = event.target.value;
    setDescription(text);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  };

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__block">
        <input
          type="text"
          className="popup__input popup__input_type_name"
          placeholder="Имя"
          name="name"
          id="name-input"
          minLength="2"
          maxLength="40"
          required
          onChange={handleChangeName}
          value={name || ""}
        />
        <span className="popup__input-error name-input-error"></span>
      </label>
      <label className="popup__block">
        <input
          type="text"
          className="popup__input popup__input_type_job"
          id="job-input"
          placeholder="Профессия"
          name="job"
          minLength="2"
          maxLength="200"
          required
          onChange={handleChangeDescription}
          value={description || ""}
        />
        <span className="popup__input-error job-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
