const setSidebar = (status = 'show' || 'hide') => {
  localStorage.setItem('ACCESS_SIDEBAR', status);
};

const getSidebar = () => {
  if (localStorage.getItem('ACCESS_SIDEBAR') === null) return localStorage.setItem('ACCESS_SIDEBAR', 'hide');

  return localStorage.getItem('ACCESS_SIDEBAR');
};

const setLanguage = (language = 'en' || 'th') => {
  localStorage.setItem('ACCESS_LANGUAGE', language);
};

const getLanguage = () => {
  return localStorage.getItem('ACCESS_LANGUAGE');
};

// const removeToken = () => {
//   localStorage.clear();
// };

// const getRole = () => {
//   if (getToken()) {
//     return 'USER';
//   }
//   return 'GUEST';
// };

export default {
  setSidebar,
  getSidebar,
  setLanguage,
  getLanguage,
};
