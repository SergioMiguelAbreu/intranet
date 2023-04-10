const SESSION_KEY = 'loggedInUser';

export const saveLoggedInUser = (user) => {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
};

export const getLoggedInUser = () => {
  const user = sessionStorage.getItem(SESSION_KEY);
  return user ? JSON.parse(user) : null;
};

export const removeLoggedInUser = () => {
  sessionStorage.removeItem(SESSION_KEY);
};