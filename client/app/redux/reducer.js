//LO SIGUIENTE ES SOLO DE EJEMPLO

import { GET_COMPANIES } from "./actions";

const initialState = {
    companies: []
    
};

const rootReducer = (state = initialState, action) => { 
    switch (action.type) {
        case GET_COMPANIES:
            return {
                ...state,
                companies: action.payload,
            };
        default:
            return { ...state };
    }
};

export default rootReducer;
