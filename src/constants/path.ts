export const ROUTE_PATH = Object.freeze({
  BASE: '/',

  LOGIN: '/login',
  LOGOUT: '/logout',
  SIGNUP: '/signup',

  USER_PAGE: '/user/:id',
});

export const API_PATH = Object.freeze({
  BASE: 'http://localhost:5173/api',

  PRODUCTS: {
    ALL: '/product/products',
  },

  USER: {
    BY_ID: '/user/:id',
  },

  AUTH: {
    TOKEN: '/auth',
    SIGNUP: '/signup',
  },
});
