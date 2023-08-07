import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";

// Verificar si el código se está ejecutando en el lado del cliente
const isClient = typeof window !== "undefined";

let composeEnhancer = compose;

// Verificar si __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ está disponible en el lado del cliente
if (isClient) {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;