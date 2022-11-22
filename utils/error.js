<<<<<<< HEAD
const getError = (error) =>
  error.response && error.response.data && error.response.data.message
    ? error.response.data.message
    : error.message;
=======
const getError = (err) =>
  err.response && err.response.data && err.response.data.message
    ? err.response.data.message
    : err.message;
>>>>>>> b2419482b9c07c51cf4b2d99960ee3a872d8af42

export { getError };
