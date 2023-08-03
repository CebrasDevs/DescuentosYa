import {
  GET_COMPANIES,
  FILTER_CARDS,
  SET_CURRENT_PAGE,
  ADD_SHOPPING_CART_ITEM,
  DELETE_SHOPPING_CART_ITEM,
} from "./actions";
import { filterArray } from "@/utils/reduxUtils";

const provisoryCategories = ["food", "health", "fashion"];
const provisoryItems = [
  {
    id: 1,
    userId: 2,
    description: null,
    discount: 15,
    category: "food",
    name: "Bebida Cola",
    price: 0,
  },
  {
    id: 2,
    userId: 2,
    description: null,
    discount: 20,
    category: "health",
    name: "Chinese massage",
    price: 200,
  },
  {
    id: 3,
    userId: 2,
    description: null,
    discount: 50,
    category: "fashion",
    name: "T-shirts",
    price: 0,
  },
  {
    id: 4,
    userId: 2,
    description: null,
    discount: 30,
    category: "health",
    name: "Nails",
    price: 100,
  },
  {
    id: 5,
    userId: 2,
    description: null,
    discount: 40,
    category: "fashion",
    name: "Shoes",
    price: 0,
  },
  {
    id: 6,
    userId: 2,
    description: null,
    discount: 5,
    category: "food",
    name: "Fish",
    price: 0,
  },
  {
    id: 7,
    userId: 2,
    description: null,
    discount: 30,
    category: "food",
    name: "Meat",
    price: 0,
  },
  {
    id: 8,
    userId: 2,
    description: null,
    discount: 20,
    category: "health",
    name: "Sauna",
    price: 100,
  },
  {
    id: 9,
    userId: 2,
    description: null,
    discount: 60,
    category: "fashion",
    name: "Hats",
    price: 0,
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
    description: null,
    discount: 50,
    category: "food",
    name: "Cookies",
    price: 0,
  },
];

const initialState = {
  companies: [],
  // categories: [],
  // allItems: [],
  categories: provisoryCategories,
  allItems: provisoryItems,
  allShoppingItems: [],
  filteredItems: [],
  activeFilters: {
    chosenItemType: "All types",
    chosenDiscount: "All",
    chosenCategory: "All categories",
    chosenSorting: "Alphabetical",
  },
  currentPage: 1,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANIES:
      return {
        ...state,
        companies: action.payload,
      };
    case FILTER_CARDS:
      const filtered = filterArray(state.allItems, action.payload);
      return {
        ...state,
        filteredItems: filtered,
        activeFilters: action.payload,
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
        return{
            ...state,
            allShoppingItems: state.allShoppingItems.filter((item)=> item.id !== action.payload)
        }
    default:
      return { ...state };
  }
};

export default rootReducer;
