import axios from "axios";

export const GET_COMPANIES = "GET_COMPANIES";
export const GET_DISCOUNTS = "GET_DISCOUNTS";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_ITEM_BY_NAME = "GET_ITEM_BY_NAME";
export const FILTER_CARDS = "FILTER_CARDS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const ADD_SHOPPING_CART_ITEM = "ADD_SHOPPING_CART_ITEM";
export const DELETE_SHOPPING_CART_ITEM = "DELETE_SHOPPING_CART_ITEM";
export const DELETE_COMPANY_ITEM = "DELETE_COMPANY_ITEM";

export const GET_COMPANY_DETAIL = "GET_COMPANY_DETAIL";
export const CLEAN_COMPANY_DETAIL = "CLEAN_COMPANY_DETAIL";

export const GET_ITEM_DETAILS = "GET_ITEM_DETAILS";

const URL_BASE = "https://desceuntosya-back.onrender.com";

export const getCompanies = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL_BASE}/companies`);
      return dispatch({
        type: GET_COMPANIES,
        payload: data,
      });
    } catch (error) {
      console.log("error");
    }
  };
};

export const getDiscounts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL_BASE}/items`);
      return dispatch({
        type: GET_DISCOUNTS,
        payload: data,
      });
    } catch (error) {
      console.log("error");
    }
  };
};

export const getCategories = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL_BASE}/categories`);
      return dispatch({
        type: GET_CATEGORIES,
        payload: data,
      });
    } catch (error) {
      console.log("error");
    }
  };
};

export const getItemsByName = (value) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL_BASE}/items?name=${value}`);
      return dispatch({
        type: GET_ITEM_BY_NAME,
        payload: data,
      });
    } catch (error) {
      console.log("error");
    }
  };
};

export const getCompanyDetail = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL_BASE}/companies/${id}`);
      return dispatch({
        type: GET_COMPANY_DETAIL,
        payload: data[0],
      });
    } catch (error) {
      console.log("error");
    }
  };
};

export const cleanCompanyDetail = () => {
  return { type: CLEAN_COMPANY_DETAIL };
};
export const filterCards = (filters) => {
  return { type: FILTER_CARDS, payload: filters };
};

export const setCurrentPage = (page) => {
  return { type: SET_CURRENT_PAGE, payload: page };
};

export const addShoppinCartItem = (item) => {
  return { type: ADD_SHOPPING_CART_ITEM, payload: item };
};

export const deleteShoppingCartItem = (id) => {
  return { type: DELETE_SHOPPING_CART_ITEM, payload: id };
};

export const deleteCompanyItem = (id) => {
  return { type: DELETE_COMPANY_ITEM, payload: id };
};
