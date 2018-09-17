import axios from 'axios';

export const ADD_TYPE = 'sublines:addProduct';
export const UPDATE_TYPE = 'sublines:updateProduct';
export const DELETE_TYPE = 'sublines:deleteProduct';
export const REQUEST_TYPE = 'sublines:requestProduct';
export const FETCH_TYPES = 'sublines:fetchProducts';
export const SHOW_ERROR = 'sublines:showError';

const instance = axios.create({
    baseURL: 'localhost:10500/api/v2/',
    headers: {"Content-Type": "application/json"}
});

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
        type: ADD_TYPE,
        payload: {
            sublines: newProduct
        },
    }
};

export function updateProduct(newProduct) {
    return {
        type: UPDATE_TYPE,
        payload: {
            sublines: newProduct
        },
    }
};

export function deleteProduct(Product) {
    return {
        type: DELETE_TYPE,
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
        instance.get(`types/`)
            .then(res => {
                let products = res.data;
                return dispatch({
                    type: FETCH_TYPES,
                    payload: {
                        products
                    }
                })
            })
            .catch(error => {dispatch(showError( error ));})
    }
}