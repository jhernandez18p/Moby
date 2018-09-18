import axios from 'axios';

export const ADD_PROVIDER = 'providers:addProduct';
export const UPDATE_PROVIDER = 'providers:updateProduct';
export const DELETE_PROVIDER = 'providers:deleteProduct';
export const REQUEST_PROVIDER = 'providers:requestProduct';
export const FETCH_PROVIDERS = 'providers:fetchProducts';
export const SHOW_ERROR = 'providers:showError';

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
        type: ADD_PROVIDER,
        payload: {
            providers: newProduct
        },
    }
};

export function updateProduct(newProduct) {
    return {
        type: UPDATE_PROVIDER,
        payload: {
            providers: newProduct
        },
    }
};

export function deleteProduct(Product) {
    return {
        type: DELETE_PROVIDER,
        payload: {
            providers: Product
        },
    }
};

export function showError(error){
    return {
        type: SHOW_ERROR,
        payload: {
            providers: initialState,
            error: [error]
        }
    }
};

export const fetchProducts = () => {

    return dispatch => {
        instance.get(`providers/    `)
            .then(res => {
                let products = res.data;
                // console.log(products);
                // dispatch(requestcarousels(products));
                return dispatch({
                    type: FETCH_PROVIDERS,
                    payload: {
                        products
                    }
                })
            })
            .catch(error => { dispatch(showError(error)); })
    }
}