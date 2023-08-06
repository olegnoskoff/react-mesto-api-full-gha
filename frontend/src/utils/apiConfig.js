const token = "d44b9fca-9567-456c-ae11-66fa146c6bcd";
const cohortId = "cohort-64";

export const apiConfig = {
  baseUrl: `https://mesto.nomoreparties.co/v1/${cohortId}`,
  headers: {
    authorization: token,
    "Content-Type": "application/json",
  },
};
