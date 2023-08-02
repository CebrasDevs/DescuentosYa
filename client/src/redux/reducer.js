import {
    GET_COMPANIES,
    FILTER_CARDS,
} from "./actions";
import { filterCards } from "./actions";


const initialState = {
    companies: [],
    allItems: [],
    filteredItems: [],
    allCategories: [],
    activeFilters: {
        chosenItemType: 'All types',
        chosenDiscount: 'All',
        chosenCategory: 'All categories',
        chosenSorting: 'Alphabetical'
    }
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMPANIES:
            return {
                ...state,
                companies: action.payload,
            };
        case FILTER_CARDS:
            const filtered = filterCards(state.allItems, action.payload);
            return {
                ...state,
                filteredItems: filtered,
                activeFilters: action.payload
            };
        default:
            return { ...state };
    }
};

export default rootReducer;
