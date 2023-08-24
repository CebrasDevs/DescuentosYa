import { URL_BASE } from "@/utils/const";
import getCompanyDistances from "@/utils/geolocationUtils/getCompanyDistances";
import getDistances from "@/utils/geolocationUtils/getDistances";
import axios from "axios";
axios.defaults.withCredentials = true;

export const GET_COMPANIES = "GET_COMPANIES";
export const GET_DISCOUNTS = "GET_DISCOUNTS";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_ITEM_BY_NAME = "GET_ITEM_BY_NAME";
export const FILTER_CARDS = "FILTER_CARDS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const ADD_SHOPPING_CART_ITEM = "ADD_SHOPPING_CART_ITEM";
export const DELETE_SHOPPING_CART_ITEM = "DELETE_SHOPPING_CART_ITEM";
export const DELETE_COMPANY_ITEM = "DELETE_COMPANY_ITEM";
export const GET_USERS = "GET_USERS";
export const GET_COMPANY_DETAIL = "GET_COMPANY_DETAIL";
export const CLEAN_COMPANY_DETAIL = "CLEAN_COMPANY_DETAIL";
export const GET_ITEM_DETAILS = "GET_ITEM_DETAILS";
export const SET_ACTIVE_USER = "SET_ACTIVE_USER";
export const GET_ITEM_DETAIL = "GET_ITEM_DETAIL";
export const CLEAN_ITEM_DETAIL = "CLEAN_ITEM_DETAIL";
export const CLEAN_ACTIVE_USER = "CLEAN_ACTIVE_USER";
export const SET_SHOPPING_CART = "SET_SHOPPING_CART";
export const SET_DISTANCES = "SET_DISTANCES";
export const INCREASE_ITEM_QUANTITY = "INCREASE_ITEM_QUANTITY";
export const DECREASE_ITEM_QUANTITY = "DECREASE_ITEM_QUANTITY";
export const GET_USERS_BY_NAME = "GET_USERS_BY_NAME";
export const SET_FILTERS_PROFILE = "SET_FILTERS_PROFILE";

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL_BASE}/users`);
      return dispatch({
        type: GET_USERS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUsersByName = (value) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL_BASE}/users?name=${value}`);
      return dispatch({
        type: GET_USERS_BY_NAME,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCompanies = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL_BASE}/companies`);
      return dispatch({
        type: GET_COMPANIES,
        payload: data,
      });
    } catch (error) {
      console.log(error);
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
      console.log(error);
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
      console.log(error);
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
      console.log(error);
    }
  };
};

export const getCompanyDetail = (id) => {
  return async (dispatch) => {
    try {
      let { data } = await axios.get(`${URL_BASE}/companies/${id}`);
      const userLocation = localStorage.getItem("userLocation");
      if (userLocation) {
        //si se habilito, ya se calculo distancia, la buscamos y si no esta, se calcula con api nuevamente
        const distance = localStorage.getItem("companyDistances")
          ? JSON.parse(localStorage.getItem("companyDistances"))[data.id - 1]
              .distance
          : (
              await getDistances([JSON.parse(userLocation)], [data.location])
            )[0];
        data = { ...data, distance: distance };
      }
      return dispatch({
        type: GET_COMPANY_DETAIL,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const cleanItemDetail = () => {
  return { type: CLEAN_ITEM_DETAIL };
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

export const addShoppingCartItem = (item) => {
  return { type: ADD_SHOPPING_CART_ITEM, payload: item };
};

export const deleteShoppingCartItem = (id) => {
  return { type: DELETE_SHOPPING_CART_ITEM, payload: id };
};

export const deleteCompanyItem = (id) => {
  return { type: DELETE_COMPANY_ITEM, payload: id };
};

export const setActiveUser = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL_BASE}/profile/${id}`);
      return dispatch({
        type: SET_ACTIVE_USER,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const setFiltersProfile = (filters) => {
  return { type: SET_FILTERS_PROFILE, payload: filters };
}

export const setShoppingCart = (shoppingCart) => {
  return { type: SET_SHOPPING_CART, payload: shoppingCart };
};

export const getItemDetail = (id) => {
  return async (dispatch) => {
    try {
      let { data } = await axios(`${URL_BASE}/items/${id}`);
      const userLocation = localStorage.getItem("userLocation");
      if (userLocation) {
        const distance = await getDistances(
          [JSON.parse(userLocation)],
          [data.companyLocation]
        );
        data = { ...data, distance: distance[0] };
      }
      return dispatch({
        type: GET_ITEM_DETAIL,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const cleanActiveUser = () => {
  return { type: CLEAN_ACTIVE_USER };
};

export const increaseItemQuantity = (index) => {
  return { type: INCREASE_ITEM_QUANTITY, payload: index };
};

export const decreaseItemQuantity = (index) => {
  return { type: DECREASE_ITEM_QUANTITY, payload: index };
};

export const setDistances = (companies) => {
  return async (dispatch, getState) => {
    try {
      if (!companies) {
        // unico caso que sirce, es cuando quiere filtrar por mas cercano, entonces no manda companies
        const currentState = getState();
        companies = currentState.companies;
      }
      await getCompanyDistances(companies);
      return dispatch({ type: SET_DISTANCES, payload: companies });
    } catch (error) {
      console.log(error);
    }
  };
};
