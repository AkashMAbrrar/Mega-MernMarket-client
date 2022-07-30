import axios from "axios";
import * as actionType from '../constants/productConstants';

const URL = 'http://localhost:5000';


export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/products`);
        dispatch({ type: actionType.GET_PRODUCTS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actionType.GET_PRODUCTS_FAILED, payload: error.message })
    }
}