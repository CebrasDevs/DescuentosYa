import {
    GET_COMPANIES,
    GET_DISCOUNTS,
    GET_CATEGORIES,
    FILTER_CARDS,
    SET_CURRENT_PAGE,
    ADD_SHOPPING_CART_ITEM,
    DELETE_SHOPPING_CART_ITEM,
    DELETE_COMPANY_ITEM
} from "./actions";
import { filterArray } from "@/utils/reduxUtils";

const provisoryCategories = ["food", "health", "fashion"];

// const provisoryItems = [
//     {
//         id: 1,
//         userId: 2,
//         description: null,
//         discount: 15,
//         category: "food",
//         name: "Bebida Cola",
//         price: 0,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP37w4fJtnjPbvrgpY0YhURH8ivQtApmfXWVcCeDuwJAG_ZsgPiC_yMN59olVVnv1GN30&usqp=CAU"
//     },
//     {
//         id: 2,
//         userId: 3,
//         description: null,
//         discount: 20,
//         category: "health",
//         name: "Chinese massage",
//         price: 200,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP37w4fJtnjPbvrgpY0YhURH8ivQtApmfXWVcCeDuwJAG_ZsgPiC_yMN59olVVnv1GN30&usqp=CAU"
//     },
//     {
//         id: 3,
//         userId: 4,
//         description: null,
//         discount: 50,
//         category: "fashion",
//         name: "T-shirts",
//         price: 0,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP37w4fJtnjPbvrgpY0YhURH8ivQtApmfXWVcCeDuwJAG_ZsgPiC_yMN59olVVnv1GN30&usqp=CAU"
//     },
//     {
//         id: 4,
//         userId: 2,
//         description: null,
//         discount: 30,
//         category: "health",
//         name: "Nails",
//         price: 100,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP37w4fJtnjPbvrgpY0YhURH8ivQtApmfXWVcCeDuwJAG_ZsgPiC_yMN59olVVnv1GN30&usqp=CAU"
//     },
//     {
//         id: 5,
//         userId: 3,
//         description: null,
//         discount: 40,
//         category: "fashion",
//         name: "Shoes",
//         price: 0,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP37w4fJtnjPbvrgpY0YhURH8ivQtApmfXWVcCeDuwJAG_ZsgPiC_yMN59olVVnv1GN30&usqp=CAU"
//     },
//     {
//         id: 6,
//         userId: 2,
//         description: null,
//         discount: 5,
//         category: "food",
//         name: "Fish",
//         price: 0,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP37w4fJtnjPbvrgpY0YhURH8ivQtApmfXWVcCeDuwJAG_ZsgPiC_yMN59olVVnv1GN30&usqp=CAU"
//     },
//     {
//         id: 7,
//         userId: 5,
//         description: null,
//         discount: 30,
//         category: "food",
//         name: "Meat",
//         price: 0,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP37w4fJtnjPbvrgpY0YhURH8ivQtApmfXWVcCeDuwJAG_ZsgPiC_yMN59olVVnv1GN30&usqp=CAU"
//     },
//     {
//         id: 8,
//         userId: 2,
//         description: null,
//         discount: 20,
//         category: "health",
//         name: "Sauna",
//         price: 100,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP37w4fJtnjPbvrgpY0YhURH8ivQtApmfXWVcCeDuwJAG_ZsgPiC_yMN59olVVnv1GN30&usqp=CAU"
//     },
//     {
//         id: 9,
//         userId: 1,
//         description: null,
//         discount: 60,
//         category: "fashion",
//         name: "Hats",
//         price: 0,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP37w4fJtnjPbvrgpY0YhURH8ivQtApmfXWVcCeDuwJAG_ZsgPiC_yMN59olVVnv1GN30&usqp=CAU"
//     },
//     {
//         id: 10,
//         userId: 2,
//         description: null,
//         discount: 30,
//         category: "health",
//         name: "Sport Nutricion",
//         price: 1000,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP37w4fJtnjPbvrgpY0YhURH8ivQtApmfXWVcCeDuwJAG_ZsgPiC_yMN59olVVnv1GN30&usqp=CAU"
//     },
//     {
//         id: 11,
//         userId: 2,
//         description: null,
//         discount: 50,
//         category: "food",
//         name: "Cookies",
//         price: 0,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP37w4fJtnjPbvrgpY0YhURH8ivQtApmfXWVcCeDuwJAG_ZsgPiC_yMN59olVVnv1GN30&usqp=CAU"
//     },
// ];

const provisoryActiveUser = {
    id: 2,
    role: 'company',
    email: 'contact@youcompanyla.com',
    password: 'YOUwellnesslove123',
    companyName: 'YOU - Wellness & Health',
    description: 'If you are looking for a',
    cuit: 20402458354,
    address: '1234 Maple Street, Los Angeles, CA 90001, United States',
    phoneNumber: 2135557890,
    imageUrl: 'https://example.com/logo.png',
    Items: [
        {
            id: 1,
            userId: 2,
            description: 'Bebida carbonatada',
            discount: 15,
            category: "food",
            name: "Bebida Cola",
            price: 0,
        },
        {
            id: 8,
            userId: 2,
            description: '30 minutos de relajacion',
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
            description: 'Galletas de primeras marcas',
            discount: 50,
            category: "food",
            name: "Cookies",
            price: 0,
        },
    ]
}


const initialState = {
    companies: [],
    categories: provisoryCategories,
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
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMPANIES:
            return {
                ...state,
                companies: action.payload,
            };
        case GET_DISCOUNTS:
            return {
                ...state,
                allItems: action.payload,
                filteredItems: action.payload
            };
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
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
                allShoppingItems: state.allShoppingItems.filter((item) => item.id !== action.payload)
            };
        case DELETE_COMPANY_ITEM:
            let copyAllItems = state.activeUser
            copyAllItems = copyAllItems.Items.filter((item) => item.id !== action.payload)
            console.log(copyAllItems)
            return {
                ...state,
                activeUser: { ...state.activeUser, Items: copyAllItems },
                allItems: state.allItems.filter((item) => item.id !== action.payload)
            };
        default:
            return { ...state };
    }
};

export default rootReducer;
