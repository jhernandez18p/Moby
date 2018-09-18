import axios from 'axios';

export const ADD_SUB_LINE = 'sublines:addProduct';
export const UPDATE_SUB_LINE = 'sublines:updateProduct';
export const DELETE_SUB_LINE = 'sublines:deleteProduct';
export const REQUEST_SUB_LINE = 'sublines:requestProduct';
export const FETCH_SUB_LINES = 'sublines:fetchProducts';
export const SHOW_ERROR = 'sublines:showError';

const instance = axios.create({ baseURL: '/api/v2/', headers: {"Content-Type": "application/json"} });

const initialState ={
    count: 0,
    next: null,
    previous: null,
    results: [
        {
            id: 0,
            background: null,
            description: null,
            img: null,
            logo: null,
            name: null,
            slug: null,
            website: null,
            code: null,
        },
    ]
}

export function addProduct(newProduct) {
    return {
        type: ADD_SUB_LINE,
        payload: {
            sublines: newProduct
        },
    }
};

export function updateProduct(newProduct) {
    return {
        type: UPDATE_SUB_LINE,
        payload: {
            sublines: newProduct
        },
    }
};

export function deleteProduct(Product) {
    return {
        type: DELETE_SUB_LINE,
        payload: {
            sublines: Product
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            sublines: initialState,
            error: [error]
        }
    }
};

export const fetchProducts = () => {

    return dispatch => {
        instance.get(`sublines/    `)
            .then(res => {
                let products = res.data;
                return dispatch({
                    type: FETCH_SUB_LINES,
                    payload: {
                        products
                    }
                })
            })
            .catch(error => { dispatch(showError( error )); })
    }
}