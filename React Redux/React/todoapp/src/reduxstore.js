import { createStore, combineReducers } from "redux";

const initialData = {
    products: [],
};

export const setProducts = (info) => {
    return {
        type: "SET_PRODUCTS",
        payload: info,
    };
};

const productsReducer = (state = initialData, action) => {
    if (action.type === "SET_PRODUCTS") {
        return { products: [...action.payload] };
    } else {
        return state;
    }
};

const rootReducer = combineReducers({
    productsReducer: productsReducer
})

export const productsStore = createStore(rootReducer);
