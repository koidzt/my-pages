const setSidebar = (status = 'show' || 'hide') => {
  localStorage.setItem('ACCESS_SIDEBAR', status);
};

const getSidebar = () => {
  return localStorage.getItem('ACCESS_SIDEBAR');
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
};
