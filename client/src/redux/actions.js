export const GET_COMPANIES = "GET_COMPANIES";
export const FILTER_CARDS = "FILTER_CARDS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const ADD_SHOPPING_CART_ITEM = "ADD_SHOPPING_CART_ITEM";
export const DELETE_SHOPPING_CART_ITEM = "DELETE_SHOPPING_CART_ITEM";



export const getCompanies = (data) => {
    return { type: GET_COMPANIES, payload: data };
};

export const filterCards = (filters) => {
    return {type: FILTER_CARDS, payload: filters};
};

export const setCurrentPage = (page) => {
    return { type: SET_CURRENT_PAGE, payload: page };
};

export const addShoppinCartItem = (item) => {
    return {type: ADD_SHOPPING_CART_ITEM, payload: item};
};

export const deleteShoppingCartItem = (id) => {
    return {type: DELETE_SHOPPING_CART_ITEM, payload: id};
}