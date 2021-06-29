const { REACT_APP_STORE_API_BASE_URL } = process.env;

export const DEAFULT_RETRY_AMOUNT = 3;

export const TOPSALES_URL = `${REACT_APP_STORE_API_BASE_URL}/api/top-sales`;
export const CATEGORIES_URL = `${REACT_APP_STORE_API_BASE_URL}/api/categories`;
export const PRODUCTS_LIST_URL = `${REACT_APP_STORE_API_BASE_URL}/api/items`;
export const ORDER_URL = `${REACT_APP_STORE_API_BASE_URL}/api/order`;