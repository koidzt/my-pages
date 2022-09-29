const setWebTheme = (theme = 'light' || 'dark') => {
  sessionStorage.setItem('ACCESS_THEME', theme);
};

const getWebTheme = () => {
  if (sessionStorage.getItem('ACCESS_THEME') === null) return sessionStorage.setItem('ACCESS_THEME', 'dark');

  return sessionStorage.getItem('ACCESS_THEME');
};

export default {
  setWebTheme,
  getWebTheme,
};
