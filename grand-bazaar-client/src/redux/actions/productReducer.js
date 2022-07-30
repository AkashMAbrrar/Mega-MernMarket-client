import * as actionType from '../constants/productConstants';


export const getProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case actionType.GET_PRODUCTS_SUCCESS:
            return { products: action.payload }
        case actionType.GET_PRODUCTS_FAILED:
            return { error: action.payload }

        // eslint-disable-next-line no-fallthrough
        default:
            return state
    }
} 