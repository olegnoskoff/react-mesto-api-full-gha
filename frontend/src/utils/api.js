import { apiConfig } from "./apiConfig";

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;

    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return res.json().then((res) => {
        throw new Error(res.message);
      });
    }
  }

  async _request(url, options) {
    const res = await fetch(url, options);
    return this._checkResponse(res);
  }

  getUserInfo() {
    const url = `${this._baseUrl}/users/me`;

    return this._request(url, {
      method: "GET",

      headers: this._headers,
    });
  }

  setUserInfo({ name, about }) {
    const url = `${this._baseUrl}/users/me`;

    return this._request(url, {
      method: "PATCH",

      headers: this._headers,

      body: JSON.stringify({
        name,

        about,
      }),
    });
  }

  changeAvatar(link) {
    const url = `${this._baseUrl}/users/me/avatar`;

    return this._request(url, {
      method: "PATCH",

      headers: this._headers,

      body: JSON.stringify({
        avatar: link,
      }),
    });
  }

  getInitialCards() {
    const url = `${this._baseUrl}/cards`;

    return this._request(url, {
      method: "GET",

      headers: this._headers,
    });
  }

  addNewCard({ name, link }) {
    const url = `${this._baseUrl}/cards`;

    return this._request(url, {
      method: "POST",

      headers: this._headers,

      body: JSON.stringify({
        name,

        link,
      }),
    });
  }

  deleteCard(cardId) {
    const url = `${this._baseUrl}/cards/${cardId}`;

    return this._request(url, {
      method: "DELETE",

      headers: this._headers,
    });
  }

  _setLike(cardId) {
    const url = `${this._baseUrl}/cards/${cardId}/likes`;

    return this._request(url, {
      method: "PUT",

      headers: this._headers,
    });
  }

  _deleteLike(cardId) {
    const url = `${this._baseUrl}/cards/${cardId}/likes`;

    return this._request(url, {
      method: "DELETE",

      headers: this._headers,
    });
  }

  toggleLike(cardId, isLiked) {
    if (isLiked) {
      return this._deleteLike(cardId);
    } else {
      return this._setLike(cardId);
    }
  }
}

const api = new Api(apiConfig);

export default api;
