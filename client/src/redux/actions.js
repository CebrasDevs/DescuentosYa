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
export const GET_USERS = 'GET_USERS'
export const GET_COMPANY_DETAIL = "GET_COMPANY_DETAIL";
export const CLEAN_COMPANY_DETAIL = "CLEAN_COMPANY_DETAIL";
export const GET_ITEM_DETAILS = "GET_ITEM_DETAILS";

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/users");
      return dispatch({
        type: GET_USERS,
        payload: data,
      });
    } catch (error) {
      console.log("error");
    }
  };
};

export const getCompanies = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/companies");
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
      const { data } = await axios.get("http://localhost:3001/items");
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
      const { data } = await axios.get("http://localhost:3001/categories");
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
      const { data } = await axios.get(`http://localhost:3001/items?name=${value}`);
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
      const { data } = await axios.get(`http://localhost:3001/companies/${id}`);
      return dispatch({
        type: GET_COMPANY_DETAIL,
        payload: data,
      });
    } catch (error) {
      console.log("error");
    }
  };
};

// export const createPreference = async () => {
//   try{
//       const response = await axios.post("http://localhost:3001/payment/create-order",{
//           title: "Name",
//           unit_price: 100,
//           quantity:1,
//           currency_id: "ARS",
//       });
//       const { id } = response.data;
//       console.log('actions', response.data)
//       return {
//         type: CREATE_PREFERENCE,
//         payload: id
//       }
//       // recibe una id que proviene del servidor ( id de la compra )
//   } catch (error) {
//       console.log(error);
//   }
// };

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
