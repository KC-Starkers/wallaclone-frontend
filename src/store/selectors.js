export const isLoggedSelector = (state) => state.auth.logged;
export const loadAdvertsSelector = (state) => state.adverts.data;
export const loadedSelector = (state) => state.adverts.loaded;
export const loadTagsSelector = (state) => state.tags;
export const loadAdvertSelector = (state, advertId) =>
  state.adverts.data.find((advert) => advert.id === advertId);
  
export const deleteAdvertSelector = (state, advertId) =>
  state.adverts.data.filter((advert) => advert.id !== advertId);

export const uiSelector = (state) => state.ui;

export const getUser = (state) => state.auth.userId;

//export const getUser = (state) => state.auth.userName;



///
export const mytoken = (state) => state.auth.userId;
export const auth = (state) => state.auth;
