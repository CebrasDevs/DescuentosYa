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
} from "./actions";
import { filterArray } from "@/utils/reduxUtils";

const provisoryActiveUser = {
  userId: 2,
  role: "ADMIN",
  email: "burgerking@gmail.com",
  password: "YOUwellnesslove123",
  companyName: "YOU - Wellness & Health",
  description: "If you are looking for a",
  cuit: 35815505462,
  address: "1234 Maple Street, Los Angeles, CA 90001, United States",
  phoneNumber: 2135557890,
  imageUrl: "https://example.com/logo.png",
  Items: [
    {
      id: 1,
      userId: 2,
      description: "Bebida carbonatada",
      discount: 15,
      category: "food",
      name: "Bebida Cola",
      price: 0,
    },
    {
      id: 8,
      userId: 2,
      description: "30 minutos de relajacion",
      discount: 20,
      category: "health",
      name: "Sauna",
      price: 100,
    },
    {
      id: 10,
      userId: 2,
      description: null,
      discount: 30,
      category: "health",
      name: "Sport Nutricion",
      price: 1000,
    },
    {
      id: 11,
      userId: 2,
      description: "Galletas de primeras marcas",
      discount: 50,
      category: "food",
      name: "Cookies",
      price: 0,
    },
  ],
};

const initialState = {
  companies: [],
  categories: [],
  users:[],
  allItems: [],
  activeUser: provisoryActiveUser,
  allShoppingItems: [],
  filteredItems: [],
  activeFilters: {
    chosenItemType: "All types",
    chosenDiscount: "All",
    chosenCategory: "All categories",
    chosenSorting: "Alphabetical",
  },
  currentPage: 1,
  companyDetail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return{
        ...state,
        users: action.payload
      }
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
    case FILTER_CARDS:
      const filtered = filterArray(state.allItems, action.payload);
      return {
        ...state,
        filteredItems: filtered,
        activeFilters: action.payload,
        currentPage: 1
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case ADD_SHOPPING_CART_ITEM:
      return {
        ...state,
        allShoppingItems: [action.payload, ...state.allShoppingItems],
      };
    case DELETE_SHOPPING_CART_ITEM:
      return {
        ...state,
        allShoppingItems: state.allShoppingItems.filter(
          (item) => item.id !== action.payload
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
    default:
      return { ...state };
  }
};

export default rootReducer;
