const setTheme = (theme = 'light' || 'dark') => {
  sessionStorage.setItem('ACCESS_THEME', theme);
};

const getTheme = () => {
  return sessionStorage.getItem('ACCESS_THEME');
};

export default {
  setTheme,
  getTheme,
};
