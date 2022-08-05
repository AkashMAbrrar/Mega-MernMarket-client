import axios from 'axios';
import * as actiontype from '../constants/cartConstant';

const URL = 'https://tranquil-cove-46631.herokuapp.com';

export const addToCart = (id, quantity) => async (dispatch) => {

    try {
        const { data } = await axios.get(`${URL}/product/${id}`);

        dispatch({ type: actiontype.ADD_TO_CART, payload: { ...data, quantity } });
    } catch (error) {
        dispatch({ type: actiontype.ADD_TO_CART_ERROR, payload: error.message });
    }
}
export const removeFromCart = (id) => async (dispatch) => {
    dispatch({ type: actiontype.REMOVE_FROM_CART, payload: id })
}
