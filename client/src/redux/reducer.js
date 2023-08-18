import {
  GET_COMPANIES,
  GET_DISCOUNTS,
  GET_CATEGORIES,
  FILTER_CARDS,
  SET_CURRENT_PAGE,
  ADD_SHOPPING_CART_ITEM,
  DELETE_SHOPPING_CART_ITEM,
  DELETE_COMPANY_ITEM,
  GET_COMPANY_DETAIL,
  CLEAN_COMPANY_DETAIL,
  GET_ITEM_BY_NAME,
  GET_USERS,
  SET_ACTIVE_USER,
  CLEAN_ACTIVE_USER,
  INCREASE_ITEM_QUANTITY,
  DECREASE_ITEM_QUANTITY,
  GET_ITEM_DETAIL,
  CLEAN_ITEM_DETAIL,
  SET_SHOPPING_CART,
  SET_DISTANCES
} from "./actions";
import { filterArray } from "@/utils/filterArray";
import setItemDistances from "@/utils/geolocationUtils/setItemDistances";
import setCompanyDistances from "@/utils/geolocationUtils/setCompanyDistances";

const initialState = {
  companies: [],
  categories: [],
  users: [],
  allItems: [],
  activeUser: {},
  shoppingCart: [],
  filteredItems: [],
  activeFilters: {
    chosenItemType: "All types",
    chosenDiscount: "All",
    chosenCategory: "All categories",
    chosenSorting: "Alphabetical",
  },
  currentPage: 1,
  companyDetail: {},
  itemDetail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_COMPANIES:
      return {
        ...state,
        companies: action.payload,
      };
    case GET_DISCOUNTS:
      return {
        ...state,
        allItems: action.payload,
        filteredItems: action.payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_ITEM_BY_NAME:
      return {
        ...state,
        filteredItems: action.payload,
      };
    case SET_DISTANCES:
      const itemsWithDistances = setItemDistances(state.allItems);
      const companiesWithDistances = setCompanyDistances(action.payload);
      const filteredItems = filterArray(itemsWithDistances, state.activeFilters);
      return {
        ...state,
        allItems: itemsWithDistances,
        filteredItems: filteredItems,
        companies: companiesWithDistances
      };
    case FILTER_CARDS:
      const filtered = filterArray(state.allItems, action.payload);
      return {
        ...state,
        filteredItems: filtered,
        activeFilters: action.payload,
        currentPage: 1,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case ADD_SHOPPING_CART_ITEM:
      const newItem = {
        item: action.payload,
        quantity: 1,
      };
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, newItem], // en vez de action.payload va newItem
      };
    case DELETE_SHOPPING_CART_ITEM:
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(
          (shopping) => shopping.item.id !== action.payload
        ),
      };
    case DELETE_COMPANY_ITEM:
      let copyAllItems = state.activeUser;
      copyAllItems = copyAllItems.Items.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        activeUser: { ...state.activeUser, Items: copyAllItems },
        allItems: state.allItems.filter((item) => item.id !== action.payload),
      };
    case GET_COMPANY_DETAIL:
      return {
        ...state,
        companyDetail: action.payload,
      };
    case CLEAN_COMPANY_DETAIL:
      return {
        ...state,
        companyDetail: {},
      };
    case SET_ACTIVE_USER:
      return {
        ...state,
        activeUser: action.payload,
      };
    case SET_SHOPPING_CART:
      return {
        ...state,
        shoppingCart: action.payload,
      };
    case CLEAN_ACTIVE_USER:
      return {
        ...state,
        activeUser: {},
      };

    case INCREASE_ITEM_QUANTITY:
      let objectToIncrease = state.shoppingCart[action.payload];

      objectToIncrease = {
        item: objectToIncrease.item,
        quantity: ++objectToIncrease.quantity,
      };
      return {
        ...state,
      };
    case DECREASE_ITEM_QUANTITY:
      let objectToDecrease = state.shoppingCart[action.payload];
      objectToDecrease = {
        item: objectToDecrease.item,
        quantity: --objectToDecrease.quantity,
      };
      return {
        ...state,
      };
    case GET_ITEM_DETAIL:
      return {
        ...state,
        itemDetail: action.payload,
      };
    case CLEAN_ITEM_DETAIL:
      return {
        ...state,
        itemDetail: {},
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
